// Edge route that surfaces Vercel's IP-geolocation headers (available on all
// plans, incl. free Hobby). City granularity only — no exact address. Returns
// nulls locally / off-Vercel where the headers are absent.
export const runtime = "edge";
export const dynamic = "force-dynamic";

export function GET(request: Request) {
    const h = request.headers;
    const dec = (v: string | null) => (v ? decodeURIComponent(v) : null);

    return Response.json(
        {
            city: dec(h.get("x-vercel-ip-city")),
            region: dec(h.get("x-vercel-ip-country-region")),
            country: dec(h.get("x-vercel-ip-country")),
        },
        { headers: { "cache-control": "no-store" } }
    );
}
