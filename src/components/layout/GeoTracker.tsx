"use client";

import { useEffect } from "react";
import { track } from "@vercel/analytics";

/**
 * Fires a single custom Web Analytics event per visit tagged with the visitor's
 * city/region/country (from Vercel's edge IP-geolocation headers via /api/geo).
 * Web Analytics' dashboard is country-only, so this surfaces city under
 * Analytics → Events. No-ops locally where geo headers are absent.
 */
export default function GeoTracker() {
    useEffect(() => {
        let cancelled = false;
        fetch("/api/geo")
            .then((r) => (r.ok ? r.json() : null))
            .then((geo) => {
                if (cancelled || !geo?.city) return;
                track("visit", {
                    city: geo.city,
                    region: geo.region ?? "unknown",
                    country: geo.country ?? "unknown",
                });
            })
            .catch(() => {});
        return () => {
            cancelled = true;
        };
    }, []);

    return null;
}
