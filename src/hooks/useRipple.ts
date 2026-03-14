import { useEffect } from "react";

export function useRipple() {
    useEffect(() => {
        const onClick = (e: MouseEvent) => {
            const el = document.createElement("div");
            el.style.cssText = `
        position: fixed;
        left: ${e.clientX - 30}px;
        top: ${e.clientY - 30}px;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background: rgba(201, 243, 29, 0.08);
        transform: scale(0);
        pointer-events: none;
        z-index: 9990;
        animation: ripple 0.8s ease-out forwards;
      `;
            document.body.appendChild(el);
            el.addEventListener("animationend", () => el.remove());
        };
        document.addEventListener("click", onClick);
        return () => document.removeEventListener("click", onClick);
    }, []);
}
