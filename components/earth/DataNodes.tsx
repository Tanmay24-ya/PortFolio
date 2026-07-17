"use client";

import { Html } from "@react-three/drei";
import * as THREE from "three";

export type DataNode = {
    id: string;
    label: string;
    position: [number, number, number];
    sectionId: string; // matches the id of the corresponding section on the page
};

// Nodes double as navigation markers for your actual site sections.
// Positions sit roughly on the sphere surface (radius ~0.95-1.0).
export const NODES: DataNode[] = [
    { id: "briefing", label: "BRIEFING", position: [0.3, 0.6, 0.75], sectionId: "briefing" },
    { id: "missions", label: "MISSIONS", position: [-0.6, -0.1, 0.75], sectionId: "missions" },
    { id: "arsenal", label: "ARSENAL", position: [0.75, -0.45, -0.3], sectionId: "arsenal" },
    { id: "command", label: "COMMAND", position: [-0.7, 0.4, -0.55], sectionId: "command" },
    { id: "contact", label: "CONTACT", position: [0.1, -0.75, 0.55], sectionId: "contact" },
];

type Props = {
    hoveredId: string | null;
    onHover: (id: string | null) => void;
    onSelect: (node: DataNode) => void;
};

export default function DataNodes({ hoveredId, onHover, onSelect }: Props) {
    return (
        <>
            {NODES.map((node) => {
                const isActive = hoveredId === node.id;

                return (
                    <group key={node.id} position={node.position}>
                        <mesh
                            onPointerOver={(e) => {
                                e.stopPropagation();
                                onHover(node.id);
                                document.body.style.cursor = "pointer";
                            }}
                            onPointerOut={(e) => {
                                e.stopPropagation();
                                onHover(null);
                                document.body.style.cursor = "auto";
                            }}
                            onClick={(e) => {
                                e.stopPropagation();
                                onSelect(node);
                            }}
                        >
                            <sphereGeometry args={[isActive ? 0.05 : 0.03, 16, 16]} />
                            <meshBasicMaterial color={isActive ? "#ffffff" : "#00E5FF"} />
                        </mesh>

                        {isActive && (
                            <mesh rotation={[Math.PI / 2, 0, 0]}>
                                <ringGeometry args={[0.06, 0.08, 32]} />
                                <meshBasicMaterial
                                    color="#00E5FF"
                                    transparent
                                    opacity={0.6}
                                    side={THREE.DoubleSide}
                                />
                            </mesh>
                        )}

                        {isActive && (
                            <Html distanceFactor={6} occlude>
                                <div
                                    style={{
                                        background: "rgba(2, 15, 20, 0.85)",
                                        border: "1px solid #00E5FF",
                                        color: "#00E5FF",
                                        padding: "4px 10px",
                                        fontSize: "11px",
                                        letterSpacing: "2px",
                                        whiteSpace: "nowrap",
                                        borderRadius: "2px",
                                        transform: "translate(10px, -10px)",
                                        fontFamily: "monospace",
                                        pointerEvents: "none",
                                    }}
                                >
                                    {node.label}
                                </div>
                            </Html>
                        )}
                    </group>
                );
            })}
        </>
    );
}