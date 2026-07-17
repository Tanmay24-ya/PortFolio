"use client";

import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

/* ── GLSL atmosphere rim-glow ─────────────────────────────── */
const atmVert = /* glsl */ `
  varying vec3 vNormal;
  varying vec3 vViewDir;
  void main() {
    vNormal  = normalize(normalMatrix * normal);
    vec4 mv  = modelViewMatrix * vec4(position, 1.0);
    vViewDir = normalize(-mv.xyz);
    gl_Position = projectionMatrix * mv;
  }
`;

const atmFrag = /* glsl */ `
  uniform vec3  glowColor;
  uniform float glowPower;
  uniform float glowIntensity;
  varying vec3  vNormal;
  varying vec3  vViewDir;
  void main() {
    float rim = 1.0 - max(dot(vNormal, vViewDir), 0.0);
    rim = pow(rim, glowPower);
    gl_FragColor = vec4(glowColor * rim * glowIntensity, rim * 0.9);
  }
`;

function AtmosphereGlow() {
    const mat = useRef<THREE.ShaderMaterial>(null);
    useFrame(({ clock }) => {
        if (!mat.current) return;
        mat.current.uniforms.glowIntensity.value =
            1.05 + Math.sin(clock.elapsedTime * 0.5) * 0.12;
    });
    return (
        <mesh scale={[1.09, 1.09, 1.09]}>
            <sphereGeometry args={[0.92, 64, 64]} />
            <shaderMaterial
                ref={mat}
                vertexShader={atmVert}
                fragmentShader={atmFrag}
                uniforms={{
                    glowColor:     { value: new THREE.Color("#0077ff") },
                    glowPower:     { value: 3.2 },
                    glowIntensity: { value: 1.05 },
                }}
                side={THREE.FrontSide}
                transparent
                depthWrite={false}
                blending={THREE.AdditiveBlending}
            />
        </mesh>
    );
}

/* ── Main Earth ───────────────────────────────────────────── */
export default function Earth() {
    const group  = useRef<THREE.Group>(null);
    const clouds = useRef<THREE.Mesh>(null);

    /* Load real NASA textures from /public/textures/ */
    const nightMap    = useTexture("/textures/earth-night.jpg");
    const specularMap = useTexture("/textures/earth-specular.png");
    const cloudsMap   = useTexture("/textures/earth-clouds.png");

    /* Correct UV orientation for NASA equirectangular projections */
    for (const tex of [nightMap, specularMap, cloudsMap]) {
        tex.colorSpace = THREE.SRGBColorSpace;
        tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
    }

    /* The city-lights map also doubles as emissive — clone + boost brightness */
    const emissiveTex = useMemo(() => {
        const t = nightMap.clone();
        t.needsUpdate = true;
        return t;
    }, [nightMap]);

    useFrame((_, delta) => {
        if (group.current)  group.current.rotation.y  += delta * 0.08;
        if (clouds.current) clouds.current.rotation.y += delta * 0.11; // clouds drift slightly faster
    });

    return (
        <group ref={group}>
            {/* ── Globe surface — city-lights as both colour & emissive ── */}
            <mesh>
                <sphereGeometry args={[0.92, 128, 128]} />
                <meshPhongMaterial
                    map={nightMap}
                    emissiveMap={emissiveTex}
                    emissive={new THREE.Color("#ffcc44")}
                    emissiveIntensity={1.4}       /* city lights glow */
                    specularMap={specularMap}
                    specular={new THREE.Color("#335577")}
                    shininess={18}
                />
            </mesh>

            {/* ── Thin cloud shell — semi-transparent ── */}
            <mesh ref={clouds}>
                <sphereGeometry args={[0.934, 64, 64]} />
                <meshStandardMaterial
                    alphaMap={cloudsMap}
                    transparent
                    opacity={0.22}
                    color="#aaddff"
                    depthWrite={false}
                    roughness={1}
                    metalness={0}
                />
            </mesh>

            {/* ── GLSL rim-glow atmosphere ── */}
            <AtmosphereGlow />
        </group>
    );
}