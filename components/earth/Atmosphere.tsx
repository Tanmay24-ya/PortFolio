"use client";

export default function Atmosphere() {
    return (
        <mesh>
            <sphereGeometry args={[1.03, 64, 64]} />

            <meshBasicMaterial
                color="#00E5FF"
                transparent
                opacity={0.08}
            />
        </mesh>
    );
}