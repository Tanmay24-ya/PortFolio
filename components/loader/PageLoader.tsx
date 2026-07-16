"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import BootLoader from "./BootLoader";

export default function PageLoader({
    children,
}: {
    children: React.ReactNode;
}) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2800);

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence mode="wait">
            {loading ? (
                <motion.div
                    key="loader"
                    exit={{
                        opacity: 0,
                        scale: 1.05,
                        filter: "blur(8px)",
                    }}
                    transition={{ duration: 0.7 }}
                >
                    <BootLoader />
                </motion.div>
            ) : (
                <motion.div
                    key="page"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    );
}