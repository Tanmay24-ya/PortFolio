"use client";

import { profile } from "@/data/profile";
import { motion } from "framer-motion";
import { MapPin, Cpu, Briefcase } from "lucide-react";

export default function MissionProfile() {
    return (
        <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl"
        >
            {/* Header */}
            <div className="flex items-center gap-6">

                <div className="relative flex-shrink-0">

                    {/* Replace this with your image later */}
                    <div className="h-28 w-28 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600" />

                    <span className="absolute bottom-2 right-2 h-5 w-5 rounded-full border-4 border-[#05070B] bg-green-400" />

                </div>

                <div>

                    <h3 className="text-4xl font-black">
                        {profile.name}
                    </h3>

                    <p className="mt-2 text-lg text-white/60">
                        {profile.role}
                    </p>

                    <div className="mt-4 inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
                        {profile.status}
                    </div>

                </div>

            </div>

            {/* Info */}
            <div className="mt-10 grid gap-6 md:grid-cols-2">

                <Info
                    icon={<Cpu size={18} />}
                    title="Specialization"
                    value={profile.specialization}
                />

                <Info
                    icon={<MapPin size={18} />}
                    title="Location"
                    value={profile.location}
                />

            </div>

            {/* Divider */}
            <div className="my-10 h-px bg-gradient-to-r from-cyan-400/30 via-white/10 to-transparent" />

            {/* About */}
            <div className="space-y-6">

                <h4 className="text-xl font-semibold">
                    Mission Brief
                </h4>

                {profile.about.map((paragraph) => (
                    <p
                        key={paragraph}
                        className="leading-8 text-white/70"
                    >
                        {paragraph}
                    </p>
                ))}

            </div>

            {/* Divider */}
            <div className="my-10 h-px bg-gradient-to-r from-cyan-400/30 via-white/10 to-transparent" />

            {/* Current Focus */}
            <div>

                <div className="flex items-center gap-2">

                    <Briefcase
                        size={18}
                        className="text-cyan-400"
                    />

                    <p className="text-xs tracking-[4px] text-cyan-400 uppercase">
                        Current Focus
                    </p>

                </div>

                <div className="mt-6 flex flex-wrap gap-3">

                    {profile.focus.map((item) => (

                        <motion.span
                            key={item}
                            whileHover={{
                                y: -4,
                            }}
                            className="
                                rounded-full
                                border
                                border-cyan-400/20
                                bg-cyan-400/10
                                px-4
                                py-2
                                text-sm
                                text-cyan-300
                                transition
                                hover:border-cyan-400
                                hover:bg-cyan-400/20
                            "
                        >
                            {item}
                        </motion.span>

                    ))}

                </div>

            </div>

        </motion.div>
    );
}

function Info({
    icon,
    title,
    value,
}: {
    icon: React.ReactNode;
    title: string;
    value: string;
}) {
    return (
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">

            <div className="flex items-center gap-2 text-cyan-400">

                {icon}

                <p className="text-xs uppercase tracking-[3px] text-white/50">
                    {title}
                </p>

            </div>

            <p className="mt-3 text-lg font-medium">
                {value}
            </p>

        </div>
    );
}