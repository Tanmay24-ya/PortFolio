"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function OrbitRing() {
    const ring = useRef<THREE.Mesh>(null);

    useFrame((_, delta) => {
        if (ring.current) {
            ring.current.rotation.x += delta * 0.15;
            ring.current.rotation.z += delta * 0.25;
        }
    });

    return (
        <>
            <mesh ref={ring}>
                <torusGeometry args={[1.30, 0.01, 32, 200]} />
                <meshBasicMaterial
                    color="#00E5FF"
                    transparent
                    opacity={0.4}
                />
            </mesh>
        </>
    );
}