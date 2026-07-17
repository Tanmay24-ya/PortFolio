"use client";

import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { useCallback, useState } from "react";
import Earth from "./Earth";
import Atmosphere from "./Atmosphere";
import OrbitRing from "./OrbitRing";
import Scanner from "./Scanner";
import Particles from "./Particles";
import Satellite from "./Satellite";
import DataNodes, { NODES, type DataNode } from "./DataNodes";
import ConnectionLines from "./Connectionlines";
import CameraRig from "./Camerarig";

export default function EarthScene() {
    const [hoveredId, setHoveredId] = useState<string | null>(null);
    const [focusedNode, setFocusedNode] = useState<DataNode | null>(null);

    const handleSelect = useCallback((node: DataNode) => {
        setFocusedNode((current) => (current?.id === node.id ? null : node));
        const el = document.getElementById(node.sectionId);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, []);

    return (
        <div className="relative h-[640px] w-full">
            {/* Outer halo glow — layered for depth */}
            <div className="pointer-events-none absolute inset-0 m-auto h-[520px] w-[520px] rounded-full bg-cyan-500/25 blur-[130px]" />
            <div className="pointer-events-none absolute inset-0 m-auto h-[300px] w-[300px] rounded-full bg-blue-400/10 blur-[70px]" />

            <Canvas camera={{ position: [0, 0, 3.6], fov: 42 }}>
                {/* Moonlight — very faint cool white from upper-right */}
                <directionalLight
                    position={[4, 3, 3]}
                    intensity={0.35}
                    color="#d0e8ff"
                />
                {/* Earth-shine fill — reflected light on the dark side */}
                <pointLight position={[-3, -2, -3]} intensity={0.15} color="#003070" />
                {/* Near-zero ambient so city lights pop */}
                <ambientLight intensity={0.04} />

                {/* Distant star field inside the globe canvas */}
                <Stars radius={30} depth={80} count={1800} factor={2} fade speed={0.3} />

                <Earth />
                <Atmosphere />
                <OrbitRing />
                <Scanner />
                <Particles />
                <Satellite />
                <ConnectionLines />
                <DataNodes hoveredId={hoveredId} onHover={setHoveredId} onSelect={handleSelect} />

                <CameraRig focusTarget={focusedNode?.position ?? null} />
            </Canvas>

            {/* HUD readout */}
            <div className="pointer-events-none absolute bottom-3 left-3 font-mono text-[10px] tracking-widest text-cyan-400/70">
                {focusedNode
                    ? `TRACKING: ${focusedNode.label}`
                    : hoveredId
                        ? `SCANNING: ${hoveredId.toUpperCase()}`
                        : "SYS.ONLINE"}
            </div>

            {focusedNode && (
                <button
                    onClick={() => setFocusedNode(null)}
                    className="absolute bottom-3 right-3 font-mono text-[10px] tracking-widest text-cyan-400/70 hover:text-cyan-300"
                >
                    [ RESET VIEW ]
                </button>
            )}
        </div>
    );
}