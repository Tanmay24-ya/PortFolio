"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { IconType } from "react-icons";

interface Props {
    title: string;
    subtitle: string;
    icon: IconType;
    href: string;
}

export default function ActionCard({
    title,
    subtitle,
    icon: Icon,
    href,
}: Props) {
    return (
        <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -8 }}
            whileTap={{ scale: 0.98 }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:border-indigo-500/40"
        >
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 via-cyan-500/0 to-indigo-500/0 opacity-0 transition duration-500 group-hover:opacity-100 group-hover:from-indigo-500/10 group-hover:via-cyan-500/10 group-hover:to-purple-500/10" />

            <div className="relative z-10 flex items-start justify-between">
                <motion.div
                    whileHover={{ rotate: 8, scale: 1.1 }}
                    transition={{ duration: 0.25 }}
                    className="rounded-2xl bg-white/10 p-3"
                >
                    <Icon className="h-7 w-7 text-cyan-400" />
                </motion.div>

                <ArrowUpRight className="h-5 w-5 text-neutral-500 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white" />
            </div>

            <div className="relative z-10 mt-8">
                <p className="text-xl font-bold">{title}</p>

                <p className="mt-2 text-sm text-neutral-400">
                    {subtitle}
                </p>
            </div>

            <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-cyan-400 to-indigo-500 transition-all duration-500 group-hover:w-full" />
        </motion.a>
    );
}