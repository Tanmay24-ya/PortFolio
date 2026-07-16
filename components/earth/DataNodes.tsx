"use client";

export default function DataNodes() {

    return (
        <>
            <mesh position={[0.3, 0.5, 0.8]}>
                <sphereGeometry args={[0.03]} />
                <meshBasicMaterial color="#00E5FF" />
            </mesh>

            <mesh position={[-0.5, -0.2, 0.7]}>
                <sphereGeometry args={[0.03]} />
                <meshBasicMaterial color="#00E5FF" />
            </mesh>

            <mesh position={[0.7, -0.4, -0.4]}>
                <sphereGeometry args={[0.03]} />
                <meshBasicMaterial color="#00E5FF" />
            </mesh>
        </>
    );
}