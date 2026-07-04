/**
 * Shared handle to the smooth-scroll engine. SmoothScroll (Lenis) registers
 * itself here when active (fine pointer, motion OK); nav components
 * (SectionRail) call scrollToId to glide with the same physics as wheel
 * gestures. When null (reduced motion / touch), callers fall back to native
 * scrollIntoView.
 */
export const scrollEngine: {
    scrollToId: ((id: string) => boolean) | null;
} = { scrollToId: null };
