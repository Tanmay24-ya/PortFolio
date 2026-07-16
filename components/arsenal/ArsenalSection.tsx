"use client";

import { skillCategories } from "@/data/skills";
import SkillCategory from "./SkillCategory";
import ReadinessPanel from "./ReadinessPanel";

export default function ArsenalSection() {

    return (

        <section
            id="arsenal"
            className="mx-auto max-w-7xl px-8 py-32"
        >

            <p className="tracking-[8px] text-cyan-400">

                ARSENAL

            </p>

            <h2 className="mt-4 text-5xl font-black">

                Technology Stack

            </h2>

            <p className="mt-6 max-w-2xl text-lg text-white/60">

                A curated toolkit built through real-world projects,
                AI systems, scalable backend architectures, and
                modern frontend engineering.

            </p>

            <div className="mt-20">

                <ReadinessPanel />

            </div>

            <div className="mt-16 grid gap-6 md:grid-cols-2">

                {skillCategories.map((category) => (

                    <SkillCategory
                        key={category.title}
                        {...category}
                    />

                ))}

            </div>

        </section>

    );

}