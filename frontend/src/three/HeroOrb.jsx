import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function HeroOrb() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      mount.clientWidth / mount.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 7);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    const geometry = new THREE.TorusKnotGeometry(1.3, 0.42, 220, 32);
    const material = new THREE.MeshPhysicalMaterial({
      color: 0x2dd4bf,
      metalness: 0.55,
      roughness: 0.15,
      iridescence: 1,
      iridescenceIOR: 1.3,
      clearcoat: 0.6,
      clearcoatRoughness: 0.2,
    });
    const knot = new THREE.Mesh(geometry, material);
    scene.add(knot);

    const keyLight = new THREE.PointLight(0x2dd4bf, 45, 20);
    keyLight.position.set(4, 3, 6);
    scene.add(keyLight);

    const rimLight = new THREE.PointLight(0x38bdf8, 30, 20);
    rimLight.position.set(-4, -2, -4);
    scene.add(rimLight);

    scene.add(new THREE.AmbientLight(0xffffff, 0.35));

    const mouse = { x: 0, y: 0 };
    function handlePointerMove(event) {
      const rect = mount.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
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
    function animate() {
      frameId = requestAnimationFrame(animate);
      knot.rotation.x += 0.0035;
      knot.rotation.y += 0.0055;
      knot.rotation.z += (mouse.x * 0.3 - knot.rotation.z) * 0.03;
      knot.position.y += (mouse.y * 0.4 - knot.position.y) * 0.03;
      renderer.render(scene, camera);
    }
    animate();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("resize", handleResize);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="hero-orb" aria-hidden="true" />;
}
