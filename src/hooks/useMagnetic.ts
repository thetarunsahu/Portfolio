import { useEffect, useRef, useCallback } from "react";

export function useMagnetic(strength = 0.3) {
    const ref = useRef<HTMLElement>(null);

    const onMove = useCallback(
        (e: MouseEvent) => {
            const el = ref.current;
            if (!el) return;
            const rect = el.getBoundingClientRect();
            const cx = rect.left + rect.width / 2;
            const cy = rect.top + rect.height / 2;
            const dx = (e.clientX - cx) * strength;
            const dy = (e.clientY - cy) * strength;
            el.style.transform = `translate(${dx}px, ${dy}px)`;
        },
        [strength]
    );

    const onLeave = useCallback(() => {
        const el = ref.current;
        if (el) el.style.transform = "translate(0, 0)";
    }, []);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        el.style.transition = "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)";
        el.addEventListener("mousemove", onMove);
        el.addEventListener("mouseleave", onLeave);
        return () => {
            el.removeEventListener("mousemove", onMove);
            el.removeEventListener("mouseleave", onLeave);
        };
    }, [onMove, onLeave]);

    return ref;
}
