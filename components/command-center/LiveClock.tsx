"use client";

import { useEffect, useState } from "react";

export default function LiveClock() {
    const [time, setTime] = useState("");

    useEffect(() => {
        const update = () => {
            setTime(
                new Date().toLocaleTimeString("en-IN", {
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                })
            );
        };

        update();

        const interval = setInterval(update, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <span className="font-mono text-xs text-cyan-400">
            {time}
        </span>
    );
}