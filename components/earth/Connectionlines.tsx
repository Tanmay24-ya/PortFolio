"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Line } from "@react-three/drei";
import * as THREE from "three";
import { NODES } from "./DataNodes";

// Draws a faint, slowly-pulsing network mesh between every pair of data
// nodes so the globe reads as a live "tracking grid" rather than static dots.
export default function ConnectionLines() {
    const groupRef = useRef<THREE.Group>(null);

    useFrame(({ clock }) => {
        if (!groupRef.current) return;
        groupRef.current.children.forEach((child, i) => {
            const mat = (child as THREE.Line).material as THREE.LineBasicMaterial;
            if (mat) {
                mat.opacity = 0.12 + Math.sin(clock.elapsedTime * 1.4 + i) * 0.08;
            }
        });
    });

    const pairs: [number, number][] = [];
    for (let i = 0; i < NODES.length; i++) {
        for (let j = i + 1; j < NODES.length; j++) {
            pairs.push([i, j]);
        }
    }

    return (
        <group ref={groupRef}>
            {pairs.map(([i, j], idx) => (
                <Line
                    key={idx}
                    points={[NODES[i].position, NODES[j].position]}
                    color="#00E5FF"
                    lineWidth={0.5}
                    transparent
                    opacity={0.2}
                />
            ))}
        </group>
    );
}