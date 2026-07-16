"use client";

import { motion } from "framer-motion";
import {
    Trophy,
    Brain,
    Bot,
    Code2,
    Rocket,
    Cloud,
} from "lucide-react";

const achievements = [
    {
        icon: Trophy,
        value: "4★",
        title: "CodeChef",
        subtitle: "Max Rating 1862",
    },
    {
        icon: Brain,
        value: "300+",
        title: "DSA Problems",
        subtitle: "Across LeetCode & CodeChef",
    },
    {
        icon: Bot,
        value: "19",
        title: "AI Certifications",
        subtitle: "Infosys Springboard",
    },
    {
        icon: Code2,
        value: "Top 25%",
        title: "ICPC",
        subtitle: "Winter Challenge",
    },
    {
        icon: Rocket,
        value: "10+",
        title: "Projects",
        subtitle: "Production Ready",
    },
    {
        icon: Cloud,
        value: "20+",
        title: "Deployments",
        subtitle: "Vercel • Render",
    },
];

export default function MissionRecord() {
    return (
        <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10 p-8 backdrop-blur-xl"
        >
            {/* Glow */}
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-cyan-500/15 blur-3xl" />

            <div className="relative z-10">

                <p className="text-xs tracking-[6px] text-cyan-400">
                    MISSION RECORD
                </p>

                <h2 className="mt-4 text-3xl font-black">
                    Achievements & Recognition
                </h2>

                <p className="mt-5 leading-7 text-white/60">
                    Milestones achieved through competitive programming,
                    AI engineering and building production-grade software.
                </p>

                <div className="mt-10 space-y-4">

                    {achievements.map((item) => {

                        const Icon = item.icon;

                        return (

                            <motion.div
                                key={item.title}
                                whileHover={{
                                    x: 6,
                                }}
                                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-4 transition hover:border-cyan-400/30"
                            >

                                <div className="rounded-xl bg-cyan-400/10 p-3 text-cyan-400">

                                    <Icon size={22} />

                                </div>

                                <div className="flex-1">

                                    <div className="flex items-center justify-between">

                                        <h4 className="font-semibold">
                                            {item.title}
                                        </h4>

                                        <span className="text-xl font-black text-cyan-400">
                                            {item.value}
                                        </span>

                                    </div>

                                    <p className="mt-1 text-sm text-white/50">
                                        {item.subtitle}
                                    </p>

                                </div>

                            </motion.div>

                        );

                    })}

                </div>

                <div className="mt-10 rounded-2xl border border-cyan-400/20 bg-black/30 p-5">

                    <div className="flex items-center justify-between">

                        <span className="tracking-[4px] text-cyan-400">
                            PROFILE STATUS
                        </span>

                        <span className="font-semibold text-green-400">
                            ACTIVE
                        </span>

                    </div>

                    <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">

                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "95%" }}
                            transition={{
                                duration: 1.5,
                            }}
                            className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                        />

                    </div>

                </div>

            </div>

        </motion.div>
    );
}