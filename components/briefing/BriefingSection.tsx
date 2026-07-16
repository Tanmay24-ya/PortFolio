import MissionProfile from "./MissionProfile";
import MissionRecord from "./MissionRecord";
import CoreIdentity from "./CoreIdentity";

export default function BriefingSection() {
    return (
        <section
            id="briefing"
            className="relative mx-auto max-w-7xl px-8 py-32"
        >
            {/* Heading */}

            <div className="mt-20 grid gap-10 lg:grid-cols-[1.2fr_.8fr]">
                <MissionProfile />

                <MissionRecord />
            </div>

            <div className="mt-20">
                <CoreIdentity />
            </div>
        </section>
    );
}