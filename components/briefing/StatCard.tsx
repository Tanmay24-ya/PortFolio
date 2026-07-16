"use client";

import { motion } from "framer-motion";

interface Props {
    label: string;
    value: string;
}

export default function StatCard({ label, value }: Props) {

    return (

        <motion.div
            whileHover={{ y: -4 }}
            className="rounded-2xl border border-white/10 bg-white/[0.02] p-5"
        >

            <p className="text-3xl font-black text-cyan-400">
                {value}
            </p>

            <p className="mt-2 text-sm text-white/60">
                {label}
            </p>

        </motion.div>

    )

}