"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const logs = [
    "Initializing Mission Control...",
    "Loading Interface Modules...",
    "Loading Project Database...",
    "Connecting AI Systems...",
    "Authenticating Agent...",
    "Mission Ready.",
];

export default function Loading() {
    const [progress, setProgress] = useState(0);
    const [visibleLogs, setVisibleLogs] = useState<string[]>([]);

    useEffect(() => {
        let current = 0;

        const interval = setInterval(() => {
            current += 2;

            if (current > 100) {
                current = 100;
            }

            setProgress(current);

            const logCount = Math.floor((current / 100) * logs.length);

            setVisibleLogs(logs.slice(0, logCount));

            if (current >= 100) {
                clearInterval(interval);
            }
        }, 40);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed inset-0 z-[9999] overflow-hidden bg-black">

            {/* GRID */}

            <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

            {/* RADIAL GLOW */}

            <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

            {/* SCANNER */}

            <motion.div
                animate={{
                    y: ["-100%", "100%"],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute left-0 h-40 w-full bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent"
            />

            {/* CONTENT */}

            <div className="relative flex h-full items-center justify-center px-6">

                <div className="w-full max-w-xl">

                    {/* LOGO */}

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: [1, 0.85, 1],
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                        }}
                        className="mb-10 text-center"
                    >
                        <p className="text-xs tracking-[0.8em] text-cyan-500">
                            INITIALIZING
                        </p>

                        <h1 className="mt-3 text-4xl font-black tracking-[0.45em] text-cyan-300">
                            MISSION CONTROL
                        </h1>
                    </motion.div>

                    {/* PROGRESS BLOCKS */}

                    <div className="mb-8 flex justify-center gap-2">
                        {Array.from({ length: 10 }).map((_, i) => (
                            <motion.div
                                key={i}
                                animate={{
                                    opacity: progress >= (i + 1) * 10 ? 1 : 0.2,
                                    scale: progress >= (i + 1) * 10 ? 1 : 0.85,
                                }}
                                transition={{
                                    duration: 0.25,
                                }}
                                className="h-6 w-6 rounded-sm border border-cyan-400 bg-cyan-400"
                            />
                        ))}
                    </div>

                    {/* BAR */}

                    <div className="overflow-hidden rounded-full border border-cyan-400/30 bg-cyan-950/20">

                        <motion.div
                            animate={{
                                width: `${progress}%`,
                            }}
                            transition={{
                                ease: "linear",
                            }}
                            className="h-2 bg-cyan-400 shadow-[0_0_20px_#22d3ee]"
                        />

                    </div>

                    <div className="mt-3 flex justify-between font-mono text-sm text-cyan-300">

                        <span>Loading Mission Control</span>

                        <span>{progress}%</span>

                    </div>

                    {/* TERMINAL */}

                    <div className="mt-8 rounded-2xl border border-cyan-500/20 bg-cyan-950/10 p-5 backdrop-blur">

                        <div className="mb-4 flex items-center gap-2">

                            <div className="h-3 w-3 rounded-full bg-red-500" />

                            <div className="h-3 w-3 rounded-full bg-yellow-500" />

                            <div className="h-3 w-3 rounded-full bg-green-500" />

                            <span className="ml-3 text-xs tracking-widest text-cyan-500">
                                SYSTEM LOG
                            </span>

                        </div>

                        <div className="space-y-2 font-mono text-sm">

                            {visibleLogs.map((log) => (
                                <motion.div
                                    key={log}
                                    initial={{
                                        opacity: 0,
                                        x: -15,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        x: 0,
                                    }}
                                    className="flex items-center gap-3 text-cyan-300"
                                >
                                    <span className="text-green-400">[ OK ]</span>

                                    <span>{log}</span>
                                </motion.div>
                            ))}

                            {progress < 100 && (
                                <motion.div
                                    animate={{
                                        opacity: [1, 0],
                                    }}
                                    transition={{
                                        repeat: Infinity,
                                        duration: 0.7,
                                    }}
                                    className="mt-2 font-mono text-cyan-400"
                                >
                                    ▋
                                </motion.div>
                            )}
                        </div>

                    </div>

                    {/* FOOTER */}

                    <div className="mt-8 flex justify-between text-xs uppercase tracking-[0.35em] text-cyan-500/70">

                        <span>Agent Status</span>

                        <span>Online</span>

                    </div>

                </div>

            </div>

        </div>
    );
}