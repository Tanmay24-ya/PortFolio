"use client";

import { motion } from "framer-motion";
import LiveClock from "./LiveClock";

const logs = [
    "Initializing TanmayOS...",
    "Loading AI modules...",
    "Connecting GitHub...",
    "Syncing portfolio...",
    "System Ready.",
];

const stats = [
    { label: "STATUS", value: "ONLINE" },
    { label: "MODE", value: "BUILDING" },
    { label: "LOCATION", value: "INDIA" },
    { label: "FOCUS", value: "AI × FULL STACK" },
    { label: "VERSION", value: "TanmayOS v2.0" },
];

export default function Terminal() {
    return (
        <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-950/80 backdrop-blur-xl"
        >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
                <div className="flex gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-500" />
                    <span className="h-3 w-3 rounded-full bg-yellow-500" />
                    <span className="h-3 w-3 rounded-full bg-green-500" />
                </div>

                <p className="font-mono text-xs tracking-widest text-neutral-400">
                    TERMINAL
                </p>

                <LiveClock />
            </div>

            <div className="space-y-8 p-6">
                {/* Boot Logs */}
                <div className="space-y-3 font-mono text-sm">
                    {logs.map((log, index) => (
                        <motion.div
                            key={log}
                            initial={{ opacity: 0, x: -15 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                                delay: index * 0.2,
                            }}
                            className="flex items-center gap-3"
                        >
                            <span className="text-green-400">$</span>

                            <span className="text-neutral-300">{log}</span>

                            {index === logs.length - 1 && (
                                <motion.span
                                    animate={{ opacity: [0, 1, 0] }}
                                    transition={{
                                        repeat: Infinity,
                                        duration: 1,
                                    }}
                                    className="h-4 w-[2px] bg-green-400"
                                />
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* Divider */}
                <div className="border-t border-white/10" />

                {/* Stats */}
                <div className="grid gap-4 sm:grid-cols-2">
                    {stats.map((item) => (
                        <div
                            key={item.label}
                            className="rounded-xl border border-white/10 bg-white/5 p-4"
                        >
                            <p className="text-xs tracking-[0.2em] text-neutral-500">
                                {item.label}
                            </p>

                            <p className="mt-2 font-mono text-lg text-white">
                                {item.value}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Glow */}
            <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/5 via-transparent to-indigo-500/5" />
        </motion.div>
    );
}