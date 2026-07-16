"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function Scanner() {
    const ring = useRef<THREE.Mesh>(null);

    useFrame(({ clock }) => {
        if (!ring.current) return;

        ring.current.rotation.z += 0.01;

        const pulse = 0.45 + Math.sin(clock.elapsedTime * 3) * 0.25;

        (ring.current.material as THREE.MeshBasicMaterial).opacity = pulse;
    });

    return (
        <mesh ref={ring} rotation={[Math.PI / 2, 0, 0]}>
            <ringGeometry args={[1.10, 1.13, 128]} />

            <meshBasicMaterial
                color="#00E5FF"
                transparent
                opacity={0.8}
            />
        </mesh>
    );
}