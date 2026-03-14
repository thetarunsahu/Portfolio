"use client";

import { useEffect, useRef, useState, useCallback } from "react";

export default function CustomCursor() {
    const dotRef = useRef<HTMLDivElement>(null);
    const ringRef = useRef<HTMLDivElement>(null);
    const mouse = useRef({ x: -100, y: -100 });
    const dot = useRef({ x: -100, y: -100 });
    const ring = useRef({ x: -100, y: -100 });
    const [hovering, setHovering] = useState(false);
    const [visible, setVisible] = useState(false);
    const [mobile, setMobile] = useState(false);

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const onMove = useCallback((e: MouseEvent) => {
        mouse.current = { x: e.clientX, y: e.clientY };
        if (!visible) setVisible(true);
    }, [visible]);

    useEffect(() => {
        if (window.matchMedia("(pointer: coarse)").matches) {
            setMobile(true);
            return;
        }

        window.addEventListener("mousemove", onMove);

        const enter = () => setHovering(true);
        const leave = () => setHovering(false);

        const observe = () => {
            document
                .querySelectorAll("a, button, [role='button'], .cursor-hover")
                .forEach((el) => {
                    el.addEventListener("mouseenter", enter);
                    el.addEventListener("mouseleave", leave);
                });
        };
        observe();
        const mo = new MutationObserver(observe);
        mo.observe(document.body, { childList: true, subtree: true });

        let raf = 0;
        const tick = () => {
            dot.current.x = lerp(dot.current.x, mouse.current.x, 0.15);
            dot.current.y = lerp(dot.current.y, mouse.current.y, 0.15);
            ring.current.x = lerp(ring.current.x, mouse.current.x, 0.07);
            ring.current.y = lerp(ring.current.y, mouse.current.y, 0.07);

            if (dotRef.current) {
                dotRef.current.style.transform = `translate(${dot.current.x}px, ${dot.current.y}px) translate(-50%, -50%)`;
            }
            if (ringRef.current) {
                ringRef.current.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px) translate(-50%, -50%)`;
            }
            raf = requestAnimationFrame(tick);
        };
        tick();

        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener("mousemove", onMove);
            mo.disconnect();
        };
    }, [onMove]);

    if (mobile || !visible) return null;

    return (
        <>
            <div
                ref={dotRef}
                className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full will-change-transform transition-[width,height,opacity] duration-200"
                style={{
                    width: hovering ? 24 : 8,
                    height: hovering ? 24 : 8,
                    opacity: hovering ? 0.3 : 1,
                    background: "#C9F31D",
                }}
            />
            <div
                ref={ringRef}
                className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full will-change-transform transition-[width,height,opacity] duration-200"
                style={{
                    width: hovering ? 48 : 32,
                    height: hovering ? 48 : 32,
                    opacity: hovering ? 0.6 : 0.4,
                    border: "1px solid rgba(201,243,29,0.4)",
                }}
            />
        </>
    );
}
