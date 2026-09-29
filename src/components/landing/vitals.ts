// Background animation for the landing panel: ECG paper that ripples on every
// R peak, breathing contour lines, and a sinus-rhythm ECG sweeping along the
// top contour. One clock drives all of it — the ECG runs at 72 bpm and the
// waves breathe once every 10 beats, so everything stays locked together.

const INK = '15,28,43';
const TRACE = '46,140,133';
const BEAT = 60000 / 72;     // ms per heartbeat
const R = 0.255;             // beat phase of the R peak
const WAVE = 0.6;            // waves travel at 60% of the ECG sweep speed
const BREATH = 10 * BEAT;    // one breath every 10 beats (7.2 per minute)
const CS = 40;               // large ECG-paper square, split 5 × 5
const LINES = 12;            // breathing contours (line 0 is the ECG baseline)
const TOP = 0.7;             // contours start at 70% of the panel height

const rgba = (c: string, a: number) => `rgba(${c},${Math.max(0, a).toFixed(3)})`;

// Normal sinus rhythm built from smooth waves: [amplitude, centre, width] in beat phase.
// PR ≈ 160 ms, QRS ≈ 90 ms, QT ≈ 380 ms at 72 bpm. Positive values draw upward.
const WAVES: [number, number, number][] = [
    [0.12, 0.110, 0.022],  // P
    [-0.10, 0.236, 0.006], // Q
    [1.0, 0.255, 0.0075],  // R
    [-0.24, 0.274, 0.008], // S
    [0.30, 0.560, 0.045],  // T
];

function beat(p: number) {
    let y = 0;
    for (const [a, c, w] of WAVES) y += a * Math.exp(-(((p - c) / w) ** 2) / 2);
    return -y; // canvas y grows downward
}

type Cell = { x: number; y: number; m: number; d0: number };

export function startVitals(canvas: HTMLCanvasElement, reduce: boolean) {
    const ctx = canvas.getContext('2d');
    if (!ctx) return () => {};
    let W = 0, H = 0, period = 300, v = 0.36, cells: Cell[] = [], raf = 0;
    const start = performance.now();

    function build() {
        const r = canvas.getBoundingClientRect(), dpr = window.devicePixelRatio || 1;
        W = r.width; H = r.height;
        canvas.width = W * dpr; canvas.height = H * dpr;
        ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
        period = W / Math.max(2, Math.round(W / 300)); // whole beats across the width, so the sweep wraps cleanly
        v = period / BEAT;                             // one ECG period per heartbeat
        const cx = W * 0.5, cy = H * 0.44, rx = Math.max(240, W * 0.36), ry = Math.max(200, H * 0.32);
        cells = [];
        for (let x = 0; x < W; x += CS) for (let y = 0; y < H; y += CS) {
            const m = 1 - Math.hypot((x + CS / 2 - cx) / rx, (y + CS / 2 - cy) / ry);
            if (m > 0) cells.push({ x, y, m: Math.pow(m, 1.4), d0: Math.hypot(x - cx, y - cy) });
        }
    }

    const inhale = (tt: number) => 0.5 - 0.5 * Math.cos((2 * Math.PI * tt) / BREATH);

    // contour i at column x and time tt: lifts with each breath and drifts right
    function line(i: number, x: number, tt: number) {
        const b = inhale(tt - i * 150), S = 7 + 6 * b, u = x - WAVE * v * tt;
        return H * (TOP + ((1.06 - TOP) * i) / (LINES - 1)) - Math.min(16, H * 0.022) * b
            + S * Math.sin(u / 230 + i * 0.45) + S * 0.45 * Math.sin(u / 95 + i * 0.8);
    }

    // sweeping trace with a fading trail
    function trace(head: number, yAt: (x: number) => number) {
        const c = ctx!;
        c.lineWidth = 1.5; c.lineJoin = 'round';
        for (let x0 = 0; x0 < W; x0 += 16) {
            const age = (head - x0 + W) % W;
            if (!reduce && age > W * 0.88) continue;
            c.strokeStyle = rgba(TRACE, reduce ? 0.28 : 0.55 * Math.pow(1 - age / W, 1.5));
            // the chunk holding the sweep head stops at the head; points past it belong to the previous sweep
            const end = !reduce && x0 <= head && head < x0 + 16 ? head : Math.min(W, x0 + 16);
            c.beginPath(); c.moveTo(x0, yAt(x0));
            for (let x = x0 + 1; x < end; x += 1) c.lineTo(x, yAt(x));
            c.lineTo(end, yAt(end));
            c.stroke();
        }
        if (!reduce) {
            c.fillStyle = rgba(TRACE, 0.66);
            c.beginPath(); c.arc(head, yAt(head), 2.7, 0, 7); c.fill();
        }
    }

    function draw(t: number) {
        const c = ctx!;
        c.clearRect(0, 0, W, H);
        const amp = Math.min(56, H * 0.075), head = reduce ? W : (v * t) % W;
        // each ECG column keeps the baseline it had when the sweep drew it (respiratory baseline wander)
        const ecgY = (x: number) => {
            const age = (head - x + W) % W;
            return line(0, x, t - age / v) + beat((x % period) / period) * amp;
        };

        // time since the last R peak, and where that spike was drawn
        const dx = (((head - R * period) % period) + period) % period, ph = dx / period;
        let ox = head - dx; if (ox < 0) ox += W;
        const oy = ecgY(ox), maxR = Math.hypot(W, H) * 0.75, fade = 1 - ph;
        const r1 = ph * maxR, r2 = Math.max(0, ph - 0.22) * maxR;

        // ECG paper
        c.lineWidth = 1;
        for (const cell of cells) {
            const intro = reduce ? 1 : Math.min(1, Math.max(0, (t - cell.d0 * 1.4) / 700));
            if (!intro) continue;
            let k = 0;
            if (!reduce) {
                const d = Math.hypot(cell.x + CS / 2 - ox, cell.y + CS / 2 - oy);
                k = (Math.exp(-(((d - r1) / 52) ** 2)) + 0.6 * Math.exp(-(((d - r2) / 48) ** 2))) * fade;
            }
            const m = cell.m * intro;
            if (k > 0.03) { c.fillStyle = rgba(TRACE, 0.1 * k * m); c.fillRect(cell.x, cell.y, CS, CS); }
            c.strokeStyle = rgba(TRACE, 0.06 * m); c.beginPath();
            for (let i = 1; i < 5; i++) {
                const o = (CS * i) / 5 + 0.5;
                c.moveTo(cell.x + o, cell.y); c.lineTo(cell.x + o, cell.y + CS);
                c.moveTo(cell.x, cell.y + o); c.lineTo(cell.x + CS, cell.y + o);
            }
            c.stroke();
            c.strokeStyle = rgba(TRACE, (0.16 + 0.2 * k) * m);
            c.strokeRect(cell.x + 0.5, cell.y + 0.5, CS, CS);
        }

        // breathing contours
        for (let i = 1; i < LINES; i++) {
            c.strokeStyle = rgba(INK, 0.03 + (0.06 * i) / (LINES - 1));
            c.beginPath();
            for (let x = 0; x <= W + 8; x += 8) {
                const y = line(i, x, t);
                if (x) c.lineTo(x, y); else c.moveTo(x, y);
            }
            c.stroke();
        }
        trace(head, ecgY);
    }

    function frame(now: number) {
        draw(now - start);
        raf = requestAnimationFrame(frame);
    }
    const onResize = () => { build(); if (reduce) draw(0); };

    build();
    if (reduce) draw(0); else raf = requestAnimationFrame(frame);
    window.addEventListener('resize', onResize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', onResize); };
}
