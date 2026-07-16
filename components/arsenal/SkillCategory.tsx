"use client";

import { motion } from "framer-motion";
import TechBadge from "./TechBadge";

interface Props {
    title: string;
    skills: string[];
}

export default function SkillCategory({
    title,
    skills,
}: Props) {

    return (

        <motion.div
            whileHover={{ y: -6 }}
            className="
            rounded-3xl
            border
            border-white/10
            bg-white/[0.03]
            p-8
            transition
            hover:border-cyan-400/30
        "
        >

            <h3 className="text-xl font-bold">

                {title}

            </h3>

            <div className="mt-6 flex flex-wrap gap-3">

                {skills.map((skill) => (

                    <TechBadge
                        key={skill}
                        name={skill}
                    />

                ))}

            </div>

        </motion.div>

    );

}