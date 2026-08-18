'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeCanvas3D() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // ── Scene & Camera ──
    const scene = new THREE.Scene();
    // Fog for depth & tunnel feel
    scene.fog = new THREE.FogExp2(0x020410, 0.006);

    const camera = new THREE.PerspectiveCamera(
      65,
      window.innerWidth / window.innerHeight,
      0.1,
      2000
    );
    camera.position.z = 50;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // ── Particle Texture ──
    const texCanvas = document.createElement('canvas');
    texCanvas.width = 64;
    texCanvas.height = 64;
    const texCtx = texCanvas.getContext('2d');
    if (texCtx) {
      const grad = texCtx.createRadialGradient(32, 32, 0, 32, 32, 32);
      grad.addColorStop(0, 'rgba(255,255,255,1)');
      grad.addColorStop(0.15, 'rgba(180,200,255,0.9)');
      grad.addColorStop(0.5, 'rgba(120,130,255,0.4)');
      grad.addColorStop(1, 'rgba(0,0,0,0)');
      texCtx.fillStyle = grad;
      texCtx.fillRect(0, 0, 64, 64);
    }
    const starTexture = new THREE.CanvasTexture(texCanvas);

    // ── Deep Space Stars — 3,000 particles ──
    const starCount = 3000;
    const starGeo = new THREE.BufferGeometry();
    const starPos = new Float32Array(starCount * 3);
    const starCol = new Float32Array(starCount * 3);
    const starSizes = new Float32Array(starCount);

    const palette = [
      new THREE.Color('#6366f1'),
      new THREE.Color('#a855f7'),
      new THREE.Color('#ec4899'),
      new THREE.Color('#38bdf8'),
      new THREE.Color('#34d399'),
      new THREE.Color('#ffffff'),
      new THREE.Color('#f0abfc'),
    ];

    for (let i = 0; i < starCount; i++) {
      // Distribute particles in a huge tunnel around the Z axis
      const radius = 4 + Math.random() * 50;
      const theta = Math.random() * Math.PI * 2;
      const z = (Math.random() - 0.3) * 300; // spans far back & front

      starPos[i * 3]     = Math.cos(theta) * radius;
      starPos[i * 3 + 1] = Math.sin(theta) * radius;
      starPos[i * 3 + 2] = z;

      const col = palette[Math.floor(Math.random() * palette.length)];
      starCol[i * 3]     = col.r;
      starCol[i * 3 + 1] = col.g;
      starCol[i * 3 + 2] = col.b;

      starSizes[i] = 0.3 + Math.random() * 1.0;
    }

    starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
    starGeo.setAttribute('color', new THREE.BufferAttribute(starCol, 3));

    const starMat = new THREE.PointsMaterial({
      size: 0.6,
      vertexColors: true,
      map: starTexture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const stars = new THREE.Points(starGeo, starMat);
    scene.add(stars);

    // ── Nebula ring particles (closer, brighter) ──
    const nebulaCount = 800;
    const nebGeo = new THREE.BufferGeometry();
    const nebPos = new Float32Array(nebulaCount * 3);
    const nebCol = new Float32Array(nebulaCount * 3);

    for (let i = 0; i < nebulaCount; i++) {
      const r = 2 + Math.random() * 20;
      const t = Math.random() * Math.PI * 2;
      const z = (Math.random() - 0.5) * 200;
      nebPos[i * 3]     = Math.cos(t) * r;
      nebPos[i * 3 + 1] = Math.sin(t) * r;
      nebPos[i * 3 + 2] = z;

      const col = palette[Math.floor(Math.random() * 3)]; // indigo/purple/pink
      nebCol[i * 3]     = col.r;
      nebCol[i * 3 + 1] = col.g;
      nebCol[i * 3 + 2] = col.b;
    }
    nebGeo.setAttribute('position', new THREE.BufferAttribute(nebPos, 3));
    nebGeo.setAttribute('color', new THREE.BufferAttribute(nebCol, 3));

    const nebMat = new THREE.PointsMaterial({
      size: 1.8,
      vertexColors: true,
      map: starTexture,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const nebula = new THREE.Points(nebGeo, nebMat);
    scene.add(nebula);

    // ── Wireframe Geometries (floating stations) ──
    const meshes: THREE.Mesh[] = [];
    const geosToDispose: THREE.BufferGeometry[] = [];
    const matsToDispose: THREE.Material[] = [];

    const addWireframe = (geo: THREE.BufferGeometry, color: number, opacity: number, pos: [number, number, number]) => {
      const mat = new THREE.MeshBasicMaterial({ color, wireframe: true, transparent: true, opacity });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(...pos);
      scene.add(mesh);
      meshes.push(mesh);
      geosToDispose.push(geo);
      matsToDispose.push(mat);
    };

    addWireframe(new THREE.TorusKnotGeometry(5, 1.2, 100, 16), 0x6366f1, 0.1, [14, 2, -20]);
    addWireframe(new THREE.IcosahedronGeometry(4, 1), 0xec4899, 0.08, [-16, -6, -40]);
    addWireframe(new THREE.OctahedronGeometry(3.5, 0), 0xa855f7, 0.09, [10, -10, -60]);
    addWireframe(new THREE.TorusGeometry(6, 0.6, 16, 60), 0x38bdf8, 0.07, [-12, 8, 10]);
    addWireframe(new THREE.DodecahedronGeometry(3, 0), 0x34d399, 0.08, [18, 6, -80]);

    // ── Interaction State ──
    let mouseX = 0, mouseY = 0;
    let targetX = 0, targetY = 0;
    let scrollProgress = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (total > 0) scrollProgress = window.scrollY / total;
    };

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    onScroll();

    // ── Render Loop ──
    let raf: number;
    const clock = new THREE.Clock();

    const animate = () => {
      const t = clock.getElapsedTime();

      // Smooth mouse lerp
      targetX += (mouseX - targetX) * 0.04;
      targetY += (mouseY - targetY) * 0.04;

      // CAMERA JOURNEY: fly from Z=50 down to Z=-100 as user scrolls 0%→100%
      const targetZ = 50 - scrollProgress * 150;
      camera.position.z += (targetZ - camera.position.z) * 0.06;

      // Mouse parallax (gentle)
      camera.position.x += (targetX * 4 - camera.position.x) * 0.04;
      camera.position.y += (-targetY * 3 - camera.position.y) * 0.04;
      camera.lookAt(0, 0, camera.position.z - 30);

      // Rotate particle fields
      stars.rotation.y += 0.0005;
      stars.rotation.z += 0.0002;

      nebula.rotation.y -= 0.0008;
      nebula.rotation.x += 0.0003;

      // Animate wireframes
      meshes.forEach((m, i) => {
        m.rotation.x += 0.002 * (i % 2 === 0 ? 1 : -1);
        m.rotation.y += 0.003 * (i % 2 === 0 ? 1 : -1);
        m.position.y += Math.sin(t * 0.5 + i * 2) * 0.005;
      });

      renderer.render(scene, camera);
      raf = requestAnimationFrame(animate);
    };
    animate();

    // ── Cleanup ──
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(raf);

      starGeo.dispose(); starMat.dispose();
      nebGeo.dispose(); nebMat.dispose();
      starTexture.dispose();
      geosToDispose.forEach(g => g.dispose());
      matsToDispose.forEach(m => m.dispose());
      renderer.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    />
  );
}
