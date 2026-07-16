"use client";

import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

export default function Particles() {
    const group = useRef<THREE.Group>(null);

    useFrame((_, delta) => {
        if (group.current) {
            group.current.rotation.y += delta * 0.15;
        }
    });

    const particles = useMemo(
        () =>
            Array.from({ length: 30 }).map((_, i) => ({
                id: i,
                angle: (Math.PI * 2 * i) / 30,
            })),
        []
    );

    return (
        <group ref={group}>
            {particles.map((p) => (
                <mesh
                    key={p.id}
                    position={[
                        Math.cos(p.angle) * 1.8,
                        0,
                        Math.sin(p.angle) * 1.8,
                    ]}
                >
                    <sphereGeometry args={[0.02]} />

                    <meshBasicMaterial color="#00E5FF" />
                </mesh>
            ))}
        </group>
    );
}