"use client";

import { useEffect, useState } from "react";

export default function MouseGlow() {
    const [pos, setPos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const move = (e: MouseEvent) => {
            setPos({
                x: e.clientX,
                y: e.clientY,
            });
        };

        window.addEventListener("mousemove", move);

        return () => window.removeEventListener("mousemove", move);
    }, []);

    return (
        <div
            className="pointer-events-none fixed h-96 w-96 rounded-full blur-[140px]"
            style={{
                left: pos.x - 180,
                top: pos.y - 180,
                background: "rgba(0,229,255,.10)",
                transition: "left .15s linear, top .15s linear",
            }}
        />
    );
}