import type { Metadata } from "next";
import Link from "next/link";
import Brief from "@/components/runnsmart/Brief";
import { personalInfo } from "@/lib/data";

// Tailored, unlisted page — reachable by link only, kept out of search
// indexes and absent from the site nav.
export const metadata: Metadata = {
    title: "Pavan Sai Chilukala | Brief for RunnSmart",
    description:
        "An extended engineering brief prepared for Andrew Song and the RunnSmart team.",
    robots: { index: false, follow: false },
};

export default function RunnSmartBrief() {
    return (
        <main id="main-content" tabIndex={-1} className="min-h-screen bg-cream-100">
            <Brief />

            <footer className="bg-cream-200 border-t border-cream-300 py-10">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-3">
                    <p className="text-ink-muted text-sm" suppressHydrationWarning>
                        © {new Date().getFullYear()} {personalInfo.name}
                    </p>
                    <Link
                        href="/"
                        className="text-sm text-ink-muted hover:text-terracotta-500 transition-colors"
                    >
                        chilukala.com
                    </Link>
                </div>
            </footer>
        </main>
    );
}
