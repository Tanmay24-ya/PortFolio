"use client";

import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

type Props = {
    // Position of the currently focused data node, or null to return to default view
    focusTarget: [number, number, number] | null;
};

const DEFAULT_POSITION = new THREE.Vector3(0, 0, 4.5);
const lookTarget = new THREE.Vector3(0, 0, 0);

export default function CameraRig({ focusTarget }: Props) {
    const { camera, pointer } = useThree();

    useFrame(() => {
        // Subtle parallax: camera drifts slightly toward the cursor
        const parallaxX = pointer.x * 0.3;
        const parallaxY = pointer.y * 0.2;

        const desiredPosition = focusTarget
            ? new THREE.Vector3(...focusTarget).normalize().multiplyScalar(2.2)
            : DEFAULT_POSITION;

        camera.position.lerp(
            new THREE.Vector3(
                desiredPosition.x + parallaxX,
                desiredPosition.y + parallaxY,
                desiredPosition.z
            ),
            0.04
        );

        const desiredLook = focusTarget
            ? new THREE.Vector3(...focusTarget)
            : new THREE.Vector3(0, 0, 0);

        lookTarget.lerp(desiredLook, 0.05);
        camera.lookAt(lookTarget);
    });

    return null;
}