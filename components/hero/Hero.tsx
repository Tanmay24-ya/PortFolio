"use client";

import { motion } from "framer-motion";
import EarthScene from "../earth/EarthScene";
import SpaceBackground from "../earth/SpaceBackground";

export default function Hero() {
    return (
        <section className="relative min-h-screen overflow-hidden">
            <SpaceBackground>
                {/* LEFT — text & CTAs */}
                <div className="w-full lg:w-1/2 px-4 pt-16 lg:pt-0 flex flex-col items-center text-center lg:items-start lg:text-left">
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="mb-4 text-cyan-400 tracking-[6px] uppercase text-sm"
                    >
                        Mission Control
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-6xl font-black leading-none md:text-8xl"
                    >
                        Tanmay
                        <br />
                        <span className="text-cyan-400">Dixit</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="mt-8 max-w-xl text-l leading-8 text-white/70"
                    >
                        Building AI-powered products, scalable backend systems,
                        and intelligent experiences that solve real-world problems.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center lg:justify-start"
                    >
                        <a
                            href="#missions"
                            className="w-full sm:w-auto text-center rounded-xl bg-cyan-400 px-7 py-4 font-semibold text-black transition hover:scale-105 hover:shadow-[0_0_24px_rgba(0,229,255,0.5)] cursor-pointer"
                        >
                            Launch Missions
                        </a>
                        <a
                            href="#briefing"
                            className="w-full sm:w-auto text-center rounded-xl border border-cyan-400/60 px-7 py-4 transition hover:bg-cyan-400/10 hover:border-cyan-400 cursor-pointer text-white"
                        >
                            Mission Dossier
                        </a>
                    </motion.div>
                </div>

                {/* RIGHT — planet */}
                <div className="flex w-full lg:w-1/2 items-center justify-center mt-8 lg:mt-0">
                    <EarthScene />
                </div>
            </SpaceBackground>
        </section>
    );
}