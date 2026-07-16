"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function Earth() {
    const group = useRef<THREE.Group>(null);

    useFrame((_, delta) => {
        if (group.current) {
            group.current.rotation.y += delta * 0.15;
        }
    });

    return (
        <group ref={group}>
            {/* Core */}
            <mesh>
                <sphereGeometry args={[0.92, 64, 64]} />

                <meshStandardMaterial
                    color="#05202D"
                    emissive="#00E5FF"
                    emissiveIntensity={0.15}
                    metalness={0.2}
                    roughness={0.5}
                    transparent
                    opacity={0.45}
                />
            </mesh>

            {/* Wireframe */}
            <mesh>
                <sphereGeometry args={[0.93, 64, 64]} />

                <meshBasicMaterial
                    color="#00E5FF"
                    wireframe
                    transparent
                    opacity={0.75}
                />
            </mesh>
        </group>
    );
}