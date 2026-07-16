"use client";

import { motion } from "framer-motion";
import {
    Activity,
    Cpu,
    Rocket,
    Clock3,
    Wifi,
    ShieldCheck,
} from "lucide-react";

const metrics = [
    {
        icon: Activity,
        title: "Availability",
        value: "OPEN",
        color: "text-emerald-400",
        description: "Internships • Freelance",
    },
    {
        icon: Rocket,
        title: "Current Mission",
        value: "BUILDING",
        color: "text-violet-400",
        description: "AI × Full Stack Products",
    },
    {
        icon: Clock3,
        title: "Response Time",
        value: "< 24 hrs",
        color: "text-cyan-400",
        description: "Usually same day",
    },
    {
        icon: ShieldCheck,
        title: "Reliability",
        value: "99.9%",
        color: "text-green-400",
        description: "Projects Delivered",
    },
];

const resources = [
    { label: "CPU", value: 18 },
    { label: "Memory", value: 72 },
    { label: "GPU", value: 44 },
];

export default function SystemStatus() {
    return (
        <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8"
        >
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">
                        System Status
                    </p>

                    <h3 className="mt-3 text-3xl font-bold">
                        Operational Dashboard
                    </h3>
                </div>

                <motion.div
                    animate={{ scale: [1, 1.25, 1] }}
                    transition={{
                        repeat: Infinity,
                        duration: 2,
                    }}
                    className="flex items-center gap-2"
                >
                    <span className="h-3 w-3 rounded-full bg-emerald-400" />
                    <span className="text-sm text-emerald-400">
                        ONLINE
                    </span>
                </motion.div>
            </div>

            {/* Cards */}

            <div className="mt-10 grid gap-4 sm:grid-cols-2">

                {metrics.map((item, index) => {

                    const Icon = item.icon;

                    return (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: index * 0.1,
                            }}
                            className="rounded-2xl border border-white/10 bg-neutral-900/70 p-5 transition hover:border-indigo-500/40 hover:bg-neutral-900"
                        >
                            <Icon
                                className={`mb-5 h-7 w-7 ${item.color}`}
                            />

                            <p className="text-xs uppercase tracking-widest text-neutral-500">
                                {item.title}
                            </p>

                            <h4 className={`mt-2 text-2xl font-bold ${item.color}`}>
                                {item.value}
                            </h4>

                            <p className="mt-2 text-sm text-neutral-400">
                                {item.description}
                            </p>
                        </motion.div>
                    );
                })}

            </div>

            {/* Divider */}

            <div className="my-10 border-t border-white/10" />

            {/* Resource Usage */}

            <div>

                <div className="mb-6 flex items-center gap-2">

                    <Cpu className="h-5 w-5 text-cyan-400" />

                    <h4 className="font-semibold">
                        Resource Monitor
                    </h4>

                </div>

                <div className="space-y-6">

                    {resources.map((item) => (

                        <div key={item.label}>

                            <div className="mb-2 flex justify-between text-sm">

                                <span>{item.label}</span>

                                <span className="font-mono">
                                    {item.value}%
                                </span>

                            </div>

                            <div className="h-2 overflow-hidden rounded-full bg-white/10">

                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{
                                        width: `${item.value}%`,
                                    }}
                                    transition={{
                                        duration: 1,
                                    }}
                                    className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500"
                                />

                            </div>

                        </div>

                    ))}

                </div>

            </div>

            {/* Bottom */}

            <div className="mt-10 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-5">

                <div className="flex items-center gap-3">

                    <Wifi className="text-cyan-400" />

                    <div>

                        <p className="text-sm font-semibold">
                            Connection Stable
                        </p>

                        <p className="text-sm text-neutral-400">
                            Ready for collaboration worldwide.
                        </p>

                    </div>

                </div>

            </div>

        </motion.div>
    );
}