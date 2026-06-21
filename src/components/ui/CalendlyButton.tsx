"use client";

import { useEffect, useState } from 'react';
import { PopupModal } from 'react-calendly';
import { personalInfo } from '@/lib/data';

interface CalendlyButtonProps {
    className?: string;
    children: React.ReactNode;
    ariaLabel?: string;
    title?: string;
}

export default function CalendlyButton({ className, children, ariaLabel, title }: CalendlyButtonProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [rootEl, setRootEl] = useState<HTMLElement | null>(null);

    // PopupModal needs a mounted DOM node as its portal root; only available client-side.
    useEffect(() => {
        setRootEl(document.body);
    }, []);

    return (
        <>
            <button
                type="button"
                onClick={() => setIsOpen(true)}
                className={className}
                aria-label={ariaLabel}
                aria-haspopup="dialog"
                aria-expanded={isOpen}
                title={title}
            >
                {children}
            </button>

            {rootEl && (
                <PopupModal
                    url={personalInfo.links.calendly}
                    open={isOpen}
                    onModalClose={() => setIsOpen(false)}
                    rootElement={rootEl}
                    iframeTitle="Schedule a call with Pavan Sai Chilukala via Calendly"
                />
            )}
        </>
    );
}
