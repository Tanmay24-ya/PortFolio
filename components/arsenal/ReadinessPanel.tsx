"use client";

import { readiness } from "@/data/skills";
import { motion } from "framer-motion";

export default function ReadinessPanel() {

    return (

        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-500/5 p-8">

            <h3 className="text-2xl font-bold">

                Mission Readiness

            </h3>

            <div className="mt-8 space-y-7">

                {readiness.map((item) => (

                    <div key={item.title}>

                        <div className="mb-2 flex justify-between">

                            <span>{item.title}</span>

                            <span className="text-cyan-400">
                                {item.level}%
                            </span>

                        </div>

                        <div className="h-2 rounded-full bg-white/10">

                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{
                                    width: `${item.level}%`,
                                }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 1.2,
                                }}
                                className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                            />

                        </div>

                    </div>

                ))}

            </div>

        </div>

    );

}