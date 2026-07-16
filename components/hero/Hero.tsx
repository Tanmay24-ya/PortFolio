"use client";

import { motion } from "framer-motion";
import EarthScene from "../earth/EarthScene";
import BriefingSection from "@/components/briefing/BriefingSection";

export default function Hero() {
    return (
        <section id="briefing" className="relative top mx-auto flex min-h-screen max-w-7xl items-center px-8 pt-24">

            {/* LEFT */}
            <div className="w-full lg:w-1/2">

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mb-4 text-cyan-400 tracking-[6px] uppercase"
                >
                    Mission Control
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: .8 }}
                    className="text-6xl font-black leading-none md:text-8xl"
                >
                    Tanmay
                    <br />
                    <span className="text-cyan-400">Dixit</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: .4 }}
                    className="mt-8 max-w-xl text-xl leading-8 text-white/70"
                >
                    Building AI-powered products, scalable backend systems,
                    and intelligent experiences that solve real-world problems.
                </motion.p>

                <div className="mt-10 flex gap-4">
                    <button className="rounded-xl bg-cyan-400 px-7 py-4 font-semibold text-black transition hover:scale-105">
                        Launch Missions
                    </button>

                    <button className="rounded-xl border border-cyan-400 px-7 py-4 transition hover:bg-cyan-400/10">
                        Mission Dossier
                    </button>
                </div>

            </div>

            {/* RIGHT */}
            <div className="hidden lg:flex w-1/2 items-center justify-center">

                <div className="flex h-[500px] w-[500px] items-center justify-center rounded-full border border-cyan-500/20 bg-cyan-500/5">

                    <span className="text-cyan-400 tracking-[6px] uppercase">

                        <EarthScene />
                    </span>

                </div>

            </div>

        </section>
    );
}