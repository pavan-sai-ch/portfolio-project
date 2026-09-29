import Landing from '@/components/landing/Landing';
import GeoTracker from '@/components/layout/GeoTracker';
import { Analytics } from "@vercel/analytics/next"

export default function Home() {
    return (
        <>
            <Landing />
            <Analytics />
            <GeoTracker />
        </>
    );
}
