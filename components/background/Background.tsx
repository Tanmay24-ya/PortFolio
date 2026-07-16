import StarField from "./StarField";
import MouseGlow from "./MouseGlow";

export default function Background() {
    return (
        <>
            {/* Stars */}
            <div className="fixed inset-0 -z-50">
                <StarField />
            </div>

            {/* Mouse Glow */}
            <div className="fixed inset-0 -z-40 pointer-events-none">
                <MouseGlow />
            </div>

            {/* Grid */}
            <div
                className="fixed inset-0 -z-30 opacity-[0.08] pointer-events-none"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)
                    `,
                    backgroundSize: "60px 60px",
                }}
            />

            {/* Top Glow */}
            <div className="fixed left-1/2 top-0 -z-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[160px]" />

            {/* Corner Glow */}
            <div className="fixed right-0 bottom-0 -z-20 h-[400px] w-[400px] rounded-full bg-purple-500/5 blur-[150px]" />

            {/* Very subtle vignette */}
            <div
                className="fixed inset-0 -z-10 pointer-events-none"
                style={{
                    background:
                        "radial-gradient(circle at center, transparent 45%, rgba(5,7,11,.25) 100%)",
                }}
            />
        </>
    );
}