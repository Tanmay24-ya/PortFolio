"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
    ArrowUpRight,
    Heart,
    Terminal,
    Cpu,
    Sparkles,
} from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa6";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer id="footer" className="relative overflow-hidden border-t border-white/10 bg-black py-20">
            {/* Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:42px_42px]" />

            {/* Glow */}
            <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-indigo-500/10 blur-[120px]" />

            <div className="relative mx-auto max-w-7xl px-6">
                {/* Top */}
                <div className="grid gap-12 lg:grid-cols-2">
                    {/* Left */}
                    <div>
                        <div className="flex items-center gap-3">
                            <Terminal className="h-6 w-6 text-cyan-400" />

                            <h2 className="text-3xl font-black">
                                TanmayOS
                            </h2>
                        </div>

                        <p className="mt-5 max-w-lg leading-8 text-neutral-400">
                            Building intelligent software, AI-powered products,
                            and scalable web applications with modern technologies.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-3">
                            <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm">
                                Next.js
                            </span>

                            <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm">
                                TypeScript
                            </span>

                            <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm">
                                TailwindCSS
                            </span>

                            <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm">
                                Framer Motion
                            </span>
                        </div>
                    </div>

                    {/* Right */}
                    <div className="grid grid-cols-2 gap-5">
                        <Link
                            href="https://github.com/Tanmay24-ya"
                            target="_blank"
                            className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-cyan-500/40"
                        >
                            <FaGithub className="text-3xl text-cyan-400" />

                            <p className="mt-5 font-semibold">
                                GitHub
                            </p>

                            <div className="mt-2 flex items-center gap-2 text-sm text-neutral-400">
                                View Projects

                                <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </div>
                        </Link>

                        <Link
                            href="https://www.linkedin.com/in/tanmay-dixit-a251a4296/"
                            target="_blank"
                            className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-cyan-500/40"
                        >
                            <FaLinkedin className="text-3xl text-cyan-400" />

                            <p className="mt-5 font-semibold">
                                LinkedIn
                            </p>

                            <div className="mt-2 flex items-center gap-2 text-sm text-neutral-400">
                                Let's Connect

                                <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </div>
                        </Link>

                        <Link
                            href="mailto:dixittanmay041224@gmail.com"
                            className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-cyan-500/40"
                        >
                            <Sparkles className="h-8 w-8 text-cyan-400" />

                            <p className="mt-5 font-semibold">
                                Email
                            </p>

                            <div className="mt-2 flex items-center gap-2 text-sm text-neutral-400">
                                Say Hello

                                <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </div>
                        </Link>

                        <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-5">
                            <div className="flex items-center gap-2">
                                <Cpu className="h-5 w-5 text-emerald-400" />

                                <span className="text-sm text-emerald-400">
                                    SYSTEM ONLINE
                                </span>
                            </div>

                            <p className="mt-5 text-3xl font-black">
                                99.9%
                            </p>

                            <p className="text-sm text-neutral-400">
                                Mission Success Rate
                            </p>
                        </div>
                    </div>
                </div>

                {/* Divider */}

                <div className="my-12 border-t border-white/10" />

                {/* Bottom */}

                <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                    <div>
                        <p className="font-mono text-sm text-neutral-500">
                            END OF TRANSMISSION
                        </p>

                        <p className="mt-2 text-sm text-neutral-400">
                            © {year} Tanmay Dixit. Crafted with{" "}
                            <Heart className="mx-1 inline h-4 w-4 text-red-500" />
                            using Next.js.
                        </p>
                    </div>

                    <motion.a
                        whileHover={{ y: -4 }}
                        href="#top"
                        className="rounded-full border border-white/10 bg-white/5 px-6 py-3 transition hover:border-cyan-500/40"
                    >
                        ↑ Back to Top
                    </motion.a>
                </div>
            </div>
        </footer>
    );
}