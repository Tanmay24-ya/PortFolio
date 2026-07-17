"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { useMemo, useRef, type ReactNode } from "react";
import * as THREE from "three";

/* ─────────────────────────────────────────────────────────────
   GLOBAL MOUSE TRACKER
   Tracks normalized device coordinates (-1 to +1) for the window
   so the hover parallax works smoothly across the entire page.
───────────────────────────────────────────────────────────── */
const globalMouse = { x: 0, y: 0 };
if (typeof window !== "undefined") {
    window.addEventListener("pointermove", (e) => {
        globalMouse.x = (e.clientX / window.innerWidth) * 2 - 1;
        globalMouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    });
}

/* ─────────────────────────────────────────────────────────────
   STAR FIELD  — two depths, mouse parallax, gentle twinkle
───────────────────────────────────────────────────────────── */
function StarField({
    count,
    spread,
    size,
    parallaxStrength,
    color,
}: {
    count: number;
    spread: number;
    size: number;
    parallaxStrength: number;
    color: string;
}) {
    const pts = useRef<THREE.Points>(null);

    const positions = useMemo(() => {
        const arr = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            // Distribute stars in a disc-like plane (wide x/y, shallow z)
            const theta = Math.random() * Math.PI * 2;
            const r = Math.pow(Math.random(), 0.5) * spread;
            arr[i * 3]     = Math.cos(theta) * r;
            arr[i * 3 + 1] = (Math.random() - 0.5) * spread * 0.55;
            arr[i * 3 + 2] = (Math.random() - 0.5) * 8;
        }
        return arr;
    }, [count, spread]);

    useFrame(({ clock }, delta) => {
        if (!pts.current) return;
        // Slow rotation
        pts.current.rotation.z += delta * 0.003;
        // Parallax towards cursor using the global window-based coordinates
        pts.current.position.x +=
            (globalMouse.x * parallaxStrength - pts.current.position.x) * 0.04;
        pts.current.position.y +=
            (globalMouse.y * parallaxStrength - pts.current.position.y) * 0.04;
        // Twinkle via opacity
        const mat = pts.current.material as THREE.PointsMaterial;
        mat.opacity = 0.6 + Math.sin(clock.elapsedTime * 0.7 + parallaxStrength) * 0.2;
    });

    return (
        <points ref={pts}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    args={[positions, 3]}
                />
            </bufferGeometry>
            <pointsMaterial
                color={color}
                size={size}
                sizeAttenuation
                transparent
                opacity={0.7}
                depthWrite={false}
            />
        </points>
    );
}

/* ─────────────────────────────────────────────────────────────
   GALAXY ARM  — logarithmic spiral arms forming the core
───────────────────────────────────────────────────────────── */
function GalaxyArm({ armCount = 3 }: { armCount?: number }) {
    const pts = useRef<THREE.Points>(null);
    const STAR_COUNT = 900;

    const { positions, colors } = useMemo(() => {
        const pos = new Float32Array(STAR_COUNT * 3);
        const col = new Float32Array(STAR_COUNT * 3);
        const insideColor = new THREE.Color("#00c8ff");
        const outsideColor = new THREE.Color("#6030ff");

        for (let i = 0; i < STAR_COUNT; i++) {
            const arm = i % armCount;
            const radius = Math.pow(Math.random(), 0.6) * 12;
            const spinAngle = radius * 0.4;
            const branchAngle = ((Math.PI * 2) / armCount) * arm;
            const randomness = (Math.random() - 0.5) * (radius * 0.35);
            const randomY = (Math.random() - 0.5) * 0.8;

            pos[i * 3]     = Math.cos(branchAngle + spinAngle) * radius + randomness;
            pos[i * 3 + 1] = randomY;
            pos[i * 3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomness;

            const mixedColor = insideColor.clone().lerp(outsideColor, radius / 12);
            col[i * 3]     = mixedColor.r;
            col[i * 3 + 1] = mixedColor.g;
            col[i * 3 + 2] = mixedColor.b;
        }
        return { positions: pos, colors: col };
    }, [armCount]);

    useFrame((_, delta) => {
        if (!pts.current) return;
        pts.current.rotation.y += delta * 0.025;
        // Subtle parallax from global mouse coordinates
        pts.current.position.x += (globalMouse.x * 1.2 - pts.current.position.x) * 0.025;
        pts.current.position.y += (globalMouse.y * 0.8 - pts.current.position.y) * 0.025;
    });

    return (
        <points ref={pts}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    args={[positions, 3]}
                />
                <bufferAttribute
                    attach="attributes-color"
                    args={[colors, 3]}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.02}
                sizeAttenuation
                transparent
                opacity={0.4}
                vertexColors
                depthWrite={false}
            />
        </points>
    );
}

/* ─────────────────────────────────────────────────────────────
   NEBULA GLOW  — additive-blended sprite blobs
───────────────────────────────────────────────────────────── */
function makeNebulaTexture(color: string) {
    const c = document.createElement("canvas");
    c.width = c.height = 512;
    const ctx = c.getContext("2d")!;
    const g = ctx.createRadialGradient(256, 256, 0, 256, 256, 256);
    g.addColorStop(0, color);
    g.addColorStop(0.4, color.replace(/[\d.]+\)$/, "0.15)"));
    g.addColorStop(1, "rgba(0,0,0,0)");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, 512, 512);
    return new THREE.CanvasTexture(c);
}

function Nebula({
    color,
    position,
    scale,
    driftSpeed,
    parallaxStr,
}: {
    color: string;
    position: [number, number, number];
    scale: number;
    driftSpeed: number;
    parallaxStr: number;
}) {
    const sprite = useRef<THREE.Sprite>(null);
    const tex = useMemo(() => makeNebulaTexture(color), [color]);

    useFrame(({ clock }) => {
        if (!sprite.current) return;
        sprite.current.position.x =
            position[0] +
            Math.sin(clock.elapsedTime * driftSpeed) * 2 +
            globalMouse.x * parallaxStr;
        sprite.current.position.y =
            position[1] +
            Math.cos(clock.elapsedTime * driftSpeed * 0.7) * 1.5 +
            globalMouse.y * parallaxStr;
    });

    return (
        <sprite ref={sprite} position={position} scale={[scale, scale, 1]}>
            <spriteMaterial
                map={tex}
                transparent
                opacity={0.12}
                blending={THREE.AdditiveBlending}
                depthWrite={false}
            />
        </sprite>
    );
}

/* ─────────────────────────────────────────────────────────────
   SHOOTING STAR
───────────────────────────────────────────────────────────── */
function ShootingStar({ delay, startX, startY }: { delay: number; startX: number; startY: number }) {
    const objRef = useRef<THREE.Group>(null);
    const lineRef = useRef<THREE.Line | null>(null);
    const elapsed = useRef(-delay);
    const PERIOD = 8;

    const threeObj = useMemo(() => {
        const g = new THREE.BufferGeometry();
        g.setFromPoints([
            new THREE.Vector3(0, 0, 0),
            new THREE.Vector3(-1.2, -0.4, 0),
        ]);
        const mat = new THREE.LineBasicMaterial({ color: "#e0f8ff", transparent: true, opacity: 0 });
        const l = new THREE.Line(g, mat);
        lineRef.current = l;
        return l;
    }, []);

    useFrame((_, delta) => {
        const l = lineRef.current;
        if (!l) return;
        elapsed.current += delta;
        const t = ((elapsed.current % PERIOD) + PERIOD) % PERIOD;

        if (t > 1.4) {
            l.visible = false;
            return;
        }
        l.visible = true;
        const progress = t / 1.4;
        l.position.set(startX + progress * 18, startY - progress * 12, -1);
        (l.material as THREE.LineBasicMaterial).opacity = Math.sin(progress * Math.PI) * 0.9;
    });

    return <primitive object={threeObj} />;
}

/* ─────────────────────────────────────────────────────────────
   SCENE ROOT  — camera fov & initial orientation
───────────────────────────────────────────────────────────── */
function Scene() {
    return (
        <>
            {/* ── drei Stars dome: dense, full-sphere, same as inside EarthScene ── */}
            <Stars radius={80} depth={50} count={800} factor={2} saturation={0.4} fade speed={0.4} />

            {/* ── Custom layered star discs with mouse parallax ── */}
            <StarField count={600} spread={35} size={0.015} parallaxStrength={0.4} color="#c8e8ff" />
            <StarField count={300} spread={22} size={0.025} parallaxStrength={0.8} color="#ffe8c0" />
            <StarField count={150} spread={15} size={0.045} parallaxStrength={1.4} color="#ffffff" />

            {/* ── Galaxy arms — tilted Milky Way band ── */}
            <group rotation={[Math.PI / 6, 0, Math.PI / 8]}>
                <GalaxyArm armCount={3} />
            </group>

            {/* Nebula clouds */}
            <Nebula color="rgba(0,200,255,0.65)"   position={[-8, 3, -10]}  scale={14} driftSpeed={0.04} parallaxStr={0.6} />
            <Nebula color="rgba(120,60,255,0.5)"   position={[9, -2, -12]}  scale={13} driftSpeed={0.03} parallaxStr={0.5} />
            <Nebula color="rgba(255,80,140,0.3)"   position={[2, 5, -14]}   scale={10} driftSpeed={0.05} parallaxStr={0.3} />
            <Nebula color="rgba(0,255,160,0.25)"   position={[-5, -4, -11]} scale={9}  driftSpeed={0.06} parallaxStr={0.4} />

            {/* Shooting stars */}
            <ShootingStar delay={0}   startX={-10} startY={6}  />
            <ShootingStar delay={3.5} startX={-7}  startY={4}  />
            <ShootingStar delay={6}   startX={-12} startY={7}  />
        </>
    );
}

/* ─────────────────────────────────────────────────────────────
   PUBLIC COMPONENT
───────────────────────────────────────────────────────────── */
type Props = { children?: ReactNode };

export default function SpaceBackground({ children }: Props) {
    return (
        <>
            {/* Three.js canvas — pinned behind the content at z-0, above main bg */}
            <div className="pointer-events-none absolute inset-0 z-0 bg-[#00010a]">
                <Canvas
                    camera={{ position: [0, 0, 12], fov: 60 }}
                    gl={{ antialias: false, alpha: false }}
                    dpr={[1, 1.5]}
                >
                    <Scene />
                </Canvas>
            </div>

            {/* Hero content layer (above canvas at z-10) */}
            <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center gap-8 px-6 py-16 lg:flex-row lg:justify-between lg:py-0">
                {children}
            </div>
        </>
    );
}