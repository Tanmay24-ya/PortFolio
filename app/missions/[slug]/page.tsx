import missions from "@/data/missions";
import { notFound } from "next/navigation";

export default async function MissionPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    const mission = missions.find((m) => m.slug === slug);

    if (!mission) return notFound();

    return (
        <main className="min-h-screen bg-[#05070B] text-white">

            <section className="mx-auto max-w-6xl px-8 py-32">

                <p className="tracking-[6px] text-cyan-400">
                    {mission.id}
                </p>

                <h1 className="mt-6 text-6xl font-black">
                    {mission.title}
                </h1>

                <p className="mt-8 max-w-3xl text-xl text-white/70">
                    {mission.description}
                </p>

            </section>

        </main>
    );
}