"use client";

import { profile } from "@/data/profile";
import { motion } from "framer-motion";
import {
    BrainCircuit,
    Database,
    Sparkles,
} from "lucide-react";

const icons = [
    BrainCircuit,
    Database,
    Sparkles,
];

export default function CoreIdentity() {

    return (

        <div>

            <p className="tracking-[8px] text-cyan-400">
                CORE IDENTITY
            </p>

            <h2 className="mt-4 text-4xl font-black">
                What Defines Me
            </h2>

            <div className="mt-12 grid gap-6 md:grid-cols-3">

                {profile.identity.map((item, index) => {

                    const Icon = icons[index];

                    return (

                        <motion.div
                            key={item.title}
                            initial={{
                                opacity: 0,
                                y: 40,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                delay: index * .15,
                            }}
                            viewport={{
                                once: true,
                            }}
                            whileHover={{
                                y: -8,
                            }}
                            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8"
                        >

                            <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100">

                                <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />

                            </div>

                            <div className="relative">

                                <div className="inline-flex rounded-2xl bg-cyan-400/10 p-4 text-cyan-400">

                                    <Icon size={30} />

                                </div>

                                <h3 className="mt-6 text-2xl font-bold">

                                    {item.title}

                                </h3>

                                <p className="mt-4 leading-7 text-white/60">

                                    {item.description}

                                </p>

                            </div>

                        </motion.div>

                    );

                })}

            </div>

        </div>

    );

}