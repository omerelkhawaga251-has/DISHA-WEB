'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function SpaceStarfield3D() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // ── Scene & Camera ──
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x050711, 0.0035);

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      2000
    );
    camera.position.z = 100;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false, powerPreference: 'high-performance' });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // ── Glowing Star Particle Texture ──
    const texCanvas = document.createElement('canvas');
    texCanvas.width = 64;
    texCanvas.height = 64;
    const texCtx = texCanvas.getContext('2d');
    if (texCtx) {
      const grad = texCtx.createRadialGradient(32, 32, 0, 32, 32, 32);
      grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
      grad.addColorStop(0.2, 'rgba(249, 115, 22, 0.9)');
      grad.addColorStop(0.5, 'rgba(245, 158, 11, 0.35)');
      grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      texCtx.fillStyle = grad;
      texCtx.fillRect(0, 0, 64, 64);
    }
    const starTexture = new THREE.CanvasTexture(texCanvas);

    // ── 3,200 Cosmic Star Particles ──
    const starCount = 3200;
    const starGeo = new THREE.BufferGeometry();
    const starPos = new Float32Array(starCount * 3);
    const starCol = new Float32Array(starCount * 3);
    const starSizes = new Float32Array(starCount);

    const palette = [
      new THREE.Color('#f97316'), // Bright Orange
      new THREE.Color('#fb923c'), // Amber Orange
      new THREE.Color('#fef08a'), // Warm Gold
      new THREE.Color('#ffffff'), // Pure White
      new THREE.Color('#fdba74'), // Light Peach
      new THREE.Color('#38bdf8'), // Cosmic Cyan
      new THREE.Color('#c084fc'), // Nebula Violet
    ];

    for (let i = 0; i < starCount; i++) {
      const radius = 8 + Math.random() * 85;
      const theta = Math.random() * Math.PI * 2;
      const z = (Math.random() - 0.5) * 600;

      starPos[i * 3] = Math.cos(theta) * radius;
      starPos[i * 3 + 1] = Math.sin(theta) * radius;
      starPos[i * 3 + 2] = z;

      const col = palette[Math.floor(Math.random() * palette.length)];
      starCol[i * 3] = col.r;
      starCol[i * 3 + 1] = col.g;
      starCol[i * 3 + 2] = col.b;

      starSizes[i] = 0.4 + Math.random() * 1.4;
    }

    starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
    starGeo.setAttribute('color', new THREE.BufferAttribute(starCol, 3));

    const starMat = new THREE.PointsMaterial({
      size: 0.9,
      vertexColors: true,
      map: starTexture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const starField = new THREE.Points(starGeo, starMat);
    scene.add(starField);

    // ── 600 Nebula Dust Glow Particles ──
    const nebCount = 600;
    const nebGeo = new THREE.BufferGeometry();
    const nebPos = new Float32Array(nebCount * 3);
    const nebCol = new Float32Array(nebCount * 3);

    for (let i = 0; i < nebCount; i++) {
      const radius = 15 + Math.random() * 120;
      const theta = Math.random() * Math.PI * 2;
      const z = (Math.random() - 0.5) * 500;

      nebPos[i * 3] = Math.cos(theta) * radius;
      nebPos[i * 3 + 1] = Math.sin(theta) * radius;
      nebPos[i * 3 + 2] = z;

      // Deep fiery cosmic colors
      nebCol[i * 3] = 0.95 + Math.random() * 0.05;
      nebCol[i * 3 + 1] = 0.4 + Math.random() * 0.3;
      nebCol[i * 3 + 2] = 0.1;
    }

    nebGeo.setAttribute('position', new THREE.BufferAttribute(nebPos, 3));
    nebGeo.setAttribute('color', new THREE.BufferAttribute(nebCol, 3));

    const nebMat = new THREE.PointsMaterial({
      size: 2.8,
      vertexColors: true,
      map: starTexture,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const nebula = new THREE.Points(nebGeo, nebMat);
    scene.add(nebula);

    // ── Mouse & Scroll Parallax State ──
    let mouseX = 0;
    let mouseY = 0;
    let targetCameraX = 0;
    let targetCameraY = 0;
    let scrollY = 0;
    let scrollSpeed = 0;
    let lastScrollY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    const handleScroll = () => {
      scrollY = window.scrollY || window.pageYOffset;
      const delta = Math.abs(scrollY - lastScrollY);
      scrollSpeed = Math.min(delta * 0.15, 6.0);
      lastScrollY = scrollY;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Resize Handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // ── Animation Loop ──
    let animId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();

      // Smooth camera interpolation towards mouse
      targetCameraX = mouseX * 18;
      targetCameraY = -mouseY * 18;

      camera.position.x += (targetCameraX - camera.position.x) * 0.04;
      camera.position.y += (targetCameraY - camera.position.y) * 0.04;

      // Warp speed forward motion based on scroll speed
      scrollSpeed *= 0.94; // friction
      const forwardVelocity = 0.35 + scrollSpeed * 2.2;

      // Rotate stars and nebula in 3D
      starField.rotation.z += 0.0006;
      nebula.rotation.z -= 0.0004;

      // Move stars forward along Z
      const posAttr = starGeo.attributes.position as THREE.BufferAttribute;
      const posArr = posAttr.array as Float32Array;

      for (let i = 0; i < starCount; i++) {
        posArr[i * 3 + 2] += forwardVelocity;
        if (posArr[i * 3 + 2] > 200) {
          posArr[i * 3 + 2] = -400;
        }
      }
      posAttr.needsUpdate = true;

      // Pulsing scale for cosmic nebula
      nebMat.size = 2.4 + Math.sin(elapsed * 1.5) * 0.6;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      starGeo.dispose();
      starMat.dispose();
      nebGeo.dispose();
      nebMat.dispose();
      starTexture.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    />
  );
}
