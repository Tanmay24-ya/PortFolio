"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { Trail } from "@react-three/drei";

export default function Satellite() {
    const group = useRef<THREE.Group>(null);

    useFrame(({ clock }) => {
        if (!group.current) return;

        const t = clock.elapsedTime * 0.4;

        const radius = 1.65;

        group.current.position.x = Math.cos(t) * radius;
        group.current.position.z = Math.sin(t) * radius;
        group.current.position.y = Math.sin(t * 2) * 0.15;

        group.current.rotation.y = t;
    });

    return (
        <group ref={group}>
            {/* Satellite body */}
            <Trail
                width={0.4}
                length={8}
                color="#00E5FF"
                attenuation={(t) => t}
            >
                <mesh>
                    <boxGeometry args={[0.08, 0.08, 0.12]} />
                    <meshStandardMaterial
                        color="#ffffff"
                        emissive="#00E5FF"
                        emissiveIntensity={2}
                    />
                </mesh>

                {/* Left Solar Panel */}
                <mesh position={[-0.14, 0, 0]}>
                    <boxGeometry args={[0.12, 0.02, 0.08]} />
                    <meshStandardMaterial color="#00E5FF" />
                </mesh>

                {/* Right Solar Panel */}
                <mesh position={[0.14, 0, 0]}>
                    <boxGeometry args={[0.12, 0.02, 0.08]} />
                    <meshStandardMaterial color="#00E5FF" />
                </mesh>
            </Trail>
        </group>
    );
}