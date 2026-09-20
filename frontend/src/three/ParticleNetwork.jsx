import { useEffect, useRef } from "react";
import * as THREE from "three";

const PARTICLE_COUNT = 140;
const LINK_DISTANCE = 6.2;
const FIELD_SIZE = 24;

export default function ParticleNetwork() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      55,
      mount.clientWidth / mount.clientHeight,
      0.1,
      100
    );
    camera.position.z = 18;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const positions = new Float32Array(PARTICLE_COUNT * 3);
    const velocities = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      positions[i * 3] = (Math.random() - 0.5) * FIELD_SIZE;
      positions[i * 3 + 1] = (Math.random() - 0.5) * FIELD_SIZE * 0.6;
      positions[i * 3 + 2] = (Math.random() - 0.5) * FIELD_SIZE * 0.5;
      velocities.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 0.006,
          (Math.random() - 0.5) * 0.006,
          (Math.random() - 0.5) * 0.006
        )
      );
    }

    const pointsGeometry = new THREE.BufferGeometry();
    pointsGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const pointsMaterial = new THREE.PointsMaterial({
      color: 0x2dd4bf,
      size: 0.18,
      transparent: true,
      opacity: 0.85,
      depthWrite: false,
    });
    const points = new THREE.Points(pointsGeometry, pointsMaterial);
    group.add(points);

    const maxLinks = PARTICLE_COUNT * 8;
    const linePositions = new Float32Array(maxLinks * 2 * 3);
    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute("position", new THREE.BufferAttribute(linePositions, 3));
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x2dd4bf,
      transparent: true,
      opacity: 0.18,
      depthWrite: false,
    });
    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    group.add(lines);

    const mouse = { x: 0, y: 0 };
    function handlePointerMove(event) {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    }
    window.addEventListener("pointermove", handlePointerMove);

    function handleResize() {
      if (!mount) return;
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    }
    window.addEventListener("resize", handleResize);

    let frameId;
    let frameCount = 0;

    function animate() {
      frameId = requestAnimationFrame(animate);
      frameCount++;

      const pos = pointsGeometry.attributes.position.array;
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const v = velocities[i];
        pos[i * 3] += v.x;
        pos[i * 3 + 1] += v.y;
        pos[i * 3 + 2] += v.z;

        if (Math.abs(pos[i * 3]) > FIELD_SIZE / 2) v.x *= -1;
        if (Math.abs(pos[i * 3 + 1]) > (FIELD_SIZE * 0.6) / 2) v.y *= -1;
        if (Math.abs(pos[i * 3 + 2]) > (FIELD_SIZE * 0.5) / 2) v.z *= -1;
      }
      pointsGeometry.attributes.position.needsUpdate = true;

      if (frameCount % 2 === 0) {
        let linkIndex = 0;
        for (let i = 0; i < PARTICLE_COUNT && linkIndex < maxLinks; i++) {
          for (let j = i + 1; j < PARTICLE_COUNT && linkIndex < maxLinks; j++) {
            const dx = pos[i * 3] - pos[j * 3];
            const dy = pos[i * 3 + 1] - pos[j * 3 + 1];
            const dz = pos[i * 3 + 2] - pos[j * 3 + 2];
            const distSq = dx * dx + dy * dy + dz * dz;
            if (distSq < LINK_DISTANCE * LINK_DISTANCE) {
              const base = linkIndex * 6;
              linePositions[base] = pos[i * 3];
              linePositions[base + 1] = pos[i * 3 + 1];
              linePositions[base + 2] = pos[i * 3 + 2];
              linePositions[base + 3] = pos[j * 3];
              linePositions[base + 4] = pos[j * 3 + 1];
              linePositions[base + 5] = pos[j * 3 + 2];
              linkIndex++;
            }
          }
        }
        lineGeometry.setDrawRange(0, linkIndex * 2);
        lineGeometry.attributes.position.needsUpdate = true;
      }

      group.rotation.y += 0.0006;
      group.rotation.x += (mouse.y * 0.15 - group.rotation.x) * 0.02;
      group.rotation.y += (mouse.x * 0.1) * 0.001;

      renderer.render(scene, camera);
    }
    animate();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("resize", handleResize);
      pointsGeometry.dispose();
      pointsMaterial.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      renderer.dispose();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="particle-network" aria-hidden="true" />;
}
