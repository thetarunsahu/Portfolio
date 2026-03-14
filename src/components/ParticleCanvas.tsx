"use client";

import { useEffect, useRef } from "react";

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    r: number;
}

export default function ParticleCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouseRef = useRef({ x: -9999, y: -9999 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const matchMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
        if (matchMotion.matches) return;

        let w = (canvas.width = window.innerWidth);
        let h = (canvas.height = window.innerHeight);
        let animId = 0;

        const particles: Particle[] = Array.from({ length: 50 }, () => ({
            x: Math.random() * w,
            y: Math.random() * h,
            vx: (Math.random() - 0.5) * 0.4,
            vy: (Math.random() - 0.5) * 0.4,
            r: 0.3 + Math.random() * 1,
        }));

        const onResize = () => {
            w = canvas.width = window.innerWidth;
            h = canvas.height = window.innerHeight;
        };
        window.addEventListener("resize", onResize);

        const onMouse = (e: MouseEvent) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
        };
        window.addEventListener("mousemove", onMouse);

        const draw = () => {
            ctx.clearRect(0, 0, w, h);
            const mx = mouseRef.current.x;
            const my = mouseRef.current.y;

            // Cursor glow
            if (mx > 0 && my > 0) {
                const grd = ctx.createRadialGradient(mx, my, 0, mx, my, 80);
                grd.addColorStop(0, "rgba(201,243,29,0.05)");
                grd.addColorStop(1, "transparent");
                ctx.fillStyle = grd;
                ctx.fillRect(mx - 80, my - 80, 160, 160);
            }

            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];
                p.x += p.vx;
                p.y += p.vy;
                if (p.x < 0) p.x = w;
                if (p.x > w) p.x = 0;
                if (p.y < 0) p.y = h;
                if (p.y > h) p.y = 0;

                const distMouse = Math.hypot(p.x - mx, p.y - my);
                const near = distMouse < 120;
                const alpha = near ? 0.7 : 0.12;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(201,243,29,${alpha})`;
                ctx.fill();

                // Lines between close particles
                for (let j = i + 1; j < particles.length; j++) {
                    const q = particles[j];
                    const d = Math.hypot(p.x - q.x, p.y - q.y);
                    if (d < 90) {
                        const nearLine =
                            Math.hypot(p.x - mx, p.y - my) < 120 ||
                            Math.hypot(q.x - mx, q.y - my) < 120;
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(q.x, q.y);
                        ctx.strokeStyle = nearLine
                            ? "rgba(201,243,29,0.12)"
                            : "rgba(201,243,29,0.03)";
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }
            }

            animId = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener("resize", onResize);
            window.removeEventListener("mousemove", onMouse);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-0 pointer-events-none"
            aria-hidden="true"
        />
    );
}
