"use client";

import { motion } from "framer-motion";

interface Props {
    name: string;
}

export default function TechBadge({ name }: Props) {
    return (
        <motion.div
            whileHover={{
                scale: 1.05,
                y: -4,
            }}
            className="
            rounded-full
            border
            border-white/10
            bg-white/[0.03]
            px-4
            py-2
            text-sm
            transition
            hover:border-cyan-400/40
            hover:bg-cyan-400/10
        "
        >
            {name}
        </motion.div>
    );
}