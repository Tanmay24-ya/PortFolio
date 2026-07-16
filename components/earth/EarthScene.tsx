"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import DataNodes from "./DataNodes";
import Earth from "./Earth";
import OrbitRing from "./OrbitRing";
import Scanner from "./Scanner";
import Atmosphere from "./Atmosphere";
import Particles from "./Particles";
import Satellite from "./Satellite";

export default function EarthScene() {
    return (
        <div className="relative h-[520px] w-[520px]">

            {/* Background Glow */}
            <div
                className="
          absolute
          inset-0
          m-auto
          h-[420px]
          w-[420px]
          rounded-full
          bg-cyan-500/20
          blur-[140px]
        "
            />

            {/* Canvas */}
            <Canvas
                camera={{
                    position: [0, 0, 4.5],
                    fov: 40,
                }}
            >
                <ambientLight intensity={0.7} />

                <pointLight
                    position={[4, 4, 4]}
                    intensity={12}
                    color="#00E5FF"
                />

                <pointLight
                    position={[-4, -3, -3]}
                    intensity={4}
                    color="#ffffff"
                />
                <pointLight
                    position={[0, 0, 0]}
                    intensity={3}
                    color="#00E5FF"
                />

                <Earth />
                <Atmosphere />
                <OrbitRing />
                <Scanner />
                <Particles />
                <Satellite />
                <DataNodes />

                <OrbitControls
                    enableZoom={false}
                    autoRotate
                    autoRotateSpeed={0.5}
                />
            </Canvas>
        </div>
    );
}