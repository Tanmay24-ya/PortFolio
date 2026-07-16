"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Globe } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { Mission } from "@/data/missions";

interface Props {
    mission: Mission;
}

export default function MissionCard({ mission }: Props) {
    return (
        <motion.div
            whileHover={{ y: -8 }}
            transition={{ duration: 0.25 }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-all hover:border-cyan-400/40 hover:shadow-[0_0_40px_rgba(6,182,212,0.15)]"
        >
            {/* Accent Line */}
            <div
                className="absolute left-0 top-0 h-full w-1"
                style={{
                    background: mission.accent,
                }}
            />

            {/* Header */}
            <div className="flex items-center justify-between">
                <p className="text-xs tracking-[6px] text-cyan-400">
                    {mission.id}
                </p>

                <ArrowUpRight
                    size={18}
                    className="transition-transform duration-300 group-hover:rotate-45"
                />
            </div>

            {/* Title */}
            <h2 className="mt-4 text-3xl font-black">
                {mission.title}
            </h2>

            <p className="mt-2 text-white/60">
                {mission.subtitle}
            </p>

            {/* Status */}
            <div className="mt-5 flex items-center gap-3">
                <span
                    className="h-2.5 w-2.5 animate-pulse rounded-full"
                    style={{
                        background: mission.accent,
                    }}
                />

                <span className="text-sm tracking-widest">
                    {mission.status}
                </span>
            </div>

            {/* Description */}
            <p className="mt-5 leading-6 text-white/70">
                {mission.description}
            </p>

            {/* Technologies */}
            <div className="mt-5 flex flex-wrap gap-2">
                {mission.technologies.map((tech) => (
                    <span
                        key={tech}
                        className="rounded-full border border-white/10 px-3 py-1 text-xs transition-colors group-hover:border-cyan-400/30"
                    >
                        {tech}
                    </span>
                ))}
            </div>

            {/* Footer */}
            <div className="mt-6 border-t border-white/10 pt-6">

                <div className="flex items-center gap-3">

                    {mission.live && (
                        <a
                            href={mission.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 rounded-lg border border-white/10 px-3 py-1.5 text-sm transition-all hover:border-cyan-400 hover:bg-cyan-400/10"
                        >
                            <Globe size={16} />

                            Live Demo
                        </a>
                    )}

                    {mission.github && (
                        <a
                            href={mission.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 rounded-lg border border-white/10 px-3 py-1.5 text-sm transition-all hover:border-cyan-400 hover:bg-cyan-400/10"
                        >
                            <SiGithub size={16} />

                            GitHub
                        </a>
                    )}

                </div>


            </div>
        </motion.div>
    );
}