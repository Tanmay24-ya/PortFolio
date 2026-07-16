"use client";

import { motion } from "framer-motion";
import SystemStatus from "./SystemStatus";
import Terminal from "./Terminal";
import CTA from "./CTA";
import ActionCard from "./ActionCard";

import {
    Mail,
    FileText,
} from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa6";

const actions = [
    {
        title: "GitHub",
        subtitle: "Explore Projects",
        icon: FaGithub,
        href: "https://github.com/Tanmay24-ya",
    },
    {
        title: "LinkedIn",
        subtitle: "Let's Connect",
        icon: FaLinkedin,
        href: "https://www.linkedin.com/in/tanmay-dixit-a251a4296/",
    },
    {
        title: "Resume",
        subtitle: "Download PDF",
        icon: FileText,
        href: "https://drive.google.com/file/d/1oLbIcRyvBK4HdyjEom84orhhN90e-QgA/view?usp=sharing",
    },
    {
        title: "Email",
        subtitle: "Start Conversation",
        icon: Mail,
        href: "mailto:dixittanmay041224@gmail.com",
    },
];

export default function CommandCenter() {
    return (
        <section
            id="command-center"
            className="relative py-32 overflow-hidden"
        >
            {/* Background Glow */}
            <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_center,rgba(99,102,241,.12),transparent_70%)]" />

            {/* Grid */}
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:42px_42px]" />

            <div className="mx-auto max-w-7xl px-6">

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: .6 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <p className="text-indigo-400 uppercase tracking-[0.3em] text-sm">
                        Command Center
                    </p>

                    <h2 className="mt-4 text-5xl font-black">
                        Initialize Communication
                    </h2>

                    <p className="mt-6 max-w-2xl mx-auto text-neutral-400">
                        System online. Open to internships, AI products,
                        full-stack engineering and ambitious collaborations.
                    </p>
                </motion.div>

                {/* Top */}
                <div className="grid lg:grid-cols-2 gap-8">

                    <Terminal />

                    <SystemStatus />

                </div>

                {/* Actions */}

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: .2 }}
                    viewport={{ once: true }}
                    className="grid mt-12 gap-6 sm:grid-cols-2 lg:grid-cols-4"
                >
                    {actions.map((action) => (
                        <ActionCard key={action.title} {...action} />
                    ))}
                </motion.div>

                {/* CTA */}

                <CTA />

            </div>

        </section>
    );
}