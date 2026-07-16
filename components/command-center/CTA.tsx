"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTA() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative mt-20 overflow-hidden rounded-[2rem] border border-indigo-500/20 bg-gradient-to-br from-indigo-500/10 via-cyan-500/5 to-purple-500/10 p-12 text-center"
        >
            {/* Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,.15),transparent_70%)]" />

            <div className="relative z-10">
                <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 5 }}
                    className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-500/20"
                >
                    <Sparkles className="h-8 w-8 text-indigo-400" />
                </motion.div>

                <p className="text-sm uppercase tracking-[0.35em] text-indigo-400">
                    Ready
                </p>

                <h2 className="mt-4 text-4xl font-black">
                    Let's Build Something Amazing
                </h2>

                <p className="mx-auto mt-5 max-w-2xl text-neutral-400">
                    Whether it's AI products, scalable web applications, or solving
                    complex engineering problems, I'm always excited to collaborate.
                </p>

                <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    href="mailto:hello@example.com"
                    className="mt-10 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-semibold text-black transition hover:shadow-2xl"
                >
                    Initialize Connection

                    <ArrowRight className="h-5 w-5" />
                </motion.a>
            </div>
        </motion.div>
    );
}