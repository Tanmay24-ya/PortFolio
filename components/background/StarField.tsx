"use client";

import { useEffect, useState } from "react";

type Star = {
    id: number;
    left: number;
    top: number;
    size: number;
    delay: number;
    duration: number;
};

export default function StarField() {
    const [stars, setStars] = useState<Star[]>([]);

    useEffect(() => {
        const generatedStars = Array.from({ length: 180 }).map((_, i) => ({
            id: i,
            left: Math.random() * 100,
            top: Math.random() * 100,
            size: Math.random() * 3 + 1,
            delay: Math.random() * 5,
            duration: Math.random() * 4 + 2,
        }));

        setStars(generatedStars);
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden">
            {stars.map((star) => (
                <span
                    key={star.id}
                    className="absolute rounded-full bg-white animate-pulse"
                    style={{
                        left: `${star.left}%`,
                        top: `${star.top}%`,
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        animationDelay: `${star.delay}s`,
                        animationDuration: `${star.duration}s`,
                        opacity: 0.8,
                    }}
                />
            ))}
        </div>
    );
}