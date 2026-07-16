import MissionCard from "./MissionCard";
import missions from "@/data/missions";

export default function MissionSection() {
    return (
        <section id="missions" className="mx-auto max-w-7xl px-8 py-32">

            <div className="mb-20">

                <p className="text-cyan-400 uppercase tracking-[8px]">
                    Active Missions
                </p>

                <h2 className="mt-4 text-5xl font-black">
                    Deployed Systems
                </h2>

                <p className="mt-6 max-w-2xl text-white/60">
                    Every mission represents a production-ready project,
                    engineered from architecture to deployment.
                </p>

            </div>

            <div className="grid gap-8 lg:grid-cols-2">

                {missions.map((mission) => (
                    <MissionCard
                        key={mission.id}
                        mission={mission}
                    />
                ))}

            </div>

        </section>
    );
}