"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useRef, useMemo, useState, useEffect } from "react";
import * as THREE from "three";

// Pure GLSL Shader - No textures, no external files.
const vertexShader = `
    varying vec2 vUv;
    varying vec3 v_normal;
    uniform float u_time;
    uniform float u_progress;

    vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
    float snoise(vec3 v){
      const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
      const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);
      vec3 i  = floor(v + dot(v, C.yyy) );
      vec3 x0 =   v - i + dot(i, C.xxx) ;
      vec3 g = step(x0.yzx, x0.xyz);
      vec3 l = 1.0 - g;
      vec3 i1 = min( g.xyz, l.zxy );
      vec3 i2 = max( g.xyz, l.zxy );
      vec3 x1 = x0 - i1 + 1.0 * C.xxx;
      vec3 x2 = x0 - i2 + 2.0 * C.xxx;
      vec3 x3 = x0 - 1. + 3.0 * C.xxx;
      i = mod(i, 289.0 );
      vec4 p = mod( (((mod(i.z + vec4(0.0, i1.z, i2.z, 1.0), 289.0) + i.y + vec4(0.0, i1.y, i2.y, 1.0)) + i.x + vec4(0.0, i1.x, i2.x, 1.0))), 289.0);
      float n_ = 1.0/7.0; 
      vec3  ns = n_ * D.wyz - D.xzx;
      vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
      vec4 x_ = floor(j * ns.z);
      vec4 y_ = floor(j - 7.0 * x_ );
      vec4 x = x_ *ns.x + ns.yyyy;
      vec4 y = y_ *ns.x + ns.yyyy;
      vec4 h = 1.0 - abs(x) - abs(y);
      vec4 b0 = vec4( x.xy, y.xy );
      vec4 b1 = vec4( x.zw, y.zw );
      vec4 s0 = floor(b0)*2.0 + 1.0;
      vec4 s1 = floor(b1)*2.0 + 1.0;
      vec4 sh = -step(h, vec4(0.0));
      vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
      vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;
      vec3 p0 = vec3(a0.xy,h.x);
      vec3 p1 = vec3(a0.zw,h.y);
      vec3 p2 = vec3(a1.xy,h.z);
      vec3 p3 = vec3(a1.zw,h.w);
      vec4 norm = 1.79284291400159 - 0.85373472095314 * vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3));
      p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
      vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
      m = m * m;
      return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3) ) );
    }

    void main() {
        vUv = uv;
        v_normal = normal;
        float noise = snoise(position * 1.5 + u_time * 0.5);
        vec3 newPos = position + normal * noise * (u_progress * 0.25);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(newPos, 1.0);
    }
`;

const fragmentShader = `
    varying vec2 vUv;
    varying vec3 v_normal;
    uniform float u_time;
    void main() {
        float fresnel = 0.3 + 0.7 * dot(v_normal, vec3(0.0, 0.0, 1.0));
        fresnel = pow(1.0 - fresnel, 2.0);
        vec3 color = vec3(0.0, 0.6, 1.0) + fresnel * vec3(0.2, 0.8, 1.0);
        gl_FragColor = vec4(color, 1.0);
    }
`;

function NeonCore() {
  const meshRef = useRef<THREE.Mesh>(null);
  const uniforms = useMemo(() => ({
    u_time: { value: 0 },
    u_progress: { value: 1.0 }
  }), []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current && meshRef.current.material instanceof THREE.ShaderMaterial) {
      meshRef.current.material.uniforms.u_time.value = time;
      meshRef.current.material.uniforms.u_progress.value = 1.0 + Math.sin(time * 3.5) * 0.15;
      meshRef.current.rotation.y = time * 0.3;
      meshRef.current.rotation.z = time * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} position={[1, 0, 0]}>
        <icosahedronGeometry args={[1, 64]} />
        <shaderMaterial
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={uniforms}
          transparent
        />
      </mesh>
    </Float>
  );
}

export default function AudioReactiveScene() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div style={{ width: "220px", height: "100%", background: "transparent" }}>
      <Canvas camera={{ position: [0, 0, 4] }} dpr={[1, 2]}>
        <ambientLight intensity={1} />
        <pointLight position={[5, 5, 5]} intensity={2} color="#00f7ff" />
        <NeonCore />
      </Canvas>
    </div>
  );
}
