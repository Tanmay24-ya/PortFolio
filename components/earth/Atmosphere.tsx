"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function Atmosphere() {
    const mesh = useRef<THREE.Mesh>(null);

    useFrame(({ clock }) => {
        if (mesh.current) {
            const material = mesh.current.material as THREE.MeshBasicMaterial;
            material.opacity = 0.06 + Math.sin(clock.elapsedTime * 0.8) * 0.03;
        }
    });

    return (
        <mesh ref={mesh}>
            <sphereGeometry args={[1.03, 64, 64]} />
            <meshBasicMaterial color="#00E5FF" transparent opacity={0.08} />
        </mesh>
    );
}