import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

interface Skill {
  name: string;
  img: string;
  category: string;
}

const techSkills: Skill[] = [
  { name: "HTML5", img: "/html.png", category: "Frontend Language" },
  { name: "CSS3", img: "/css3.png", category: "Design StyleSheet" },
  { name: "Bootstrap", img: "/Bootstrap_logo.svg.png", category: "Frontend CSS Library" },
  { name: "React", img: "/React-icon.svg.png", category: "Frontend Web Framework" },
  { name: "Tailwind CSS", img: "/tailwind.png", category: "Frontend CSS Library" },
  { name: "TypeScript", img: "/typescript.png", category: "Frontend Language" },
  { name: "JavaScript", img: "/javascript.png", category: "Frontend Language" },
  { name: "Figma", img: "/Figma-Logo.png", category: "Design Tool" },
  { name: "Java", img: "/java.png", category: "Backend Language" },
  { name: "Node.js", img: "/nodejs.jpg", category: "Backend Language" },
  { name: "MySQL", img: "/MySQL-logo.png.webp", category: "Backend Database Management" },
  { name: "PostgreSQL", img: "/posgresql.png", category: "Backend Database Management" },
  { name: "Git", img: "/git.jpg", category: "Version Control Tool" },
  { name: "GitHub", img: "/github.png", category: "Version Control Tools" },
  { name: "Vercel", img: "/vercel.png", category: "Hosting Platform" },
];

export default function TechStack() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  const [hoveredSkill, setHoveredSkill] = useState<Skill | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x1a1500);

    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 15;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(
      mountRef.current.clientWidth,
      mountRef.current.clientHeight
    );
    mountRef.current.appendChild(renderer.domElement);

    // Globe
    const globe = new THREE.Mesh(
      new THREE.SphereGeometry(5, 64, 64),
      new THREE.MeshPhongMaterial({
        color: 0xfbbf24,
        transparent: true,
        opacity: 0.3,
      })
    );

    scene.add(globe);

    // Wireframe
    const wireframe = new THREE.Mesh(
      new THREE.SphereGeometry(5.02, 32, 32),
      new THREE.MeshBasicMaterial({
        color: 0xfcd34d,
        wireframe: true,
        transparent: true,
        opacity: 0.3,
      })
    );

    scene.add(wireframe);

    // Lighting
    scene.add(new THREE.AmbientLight(0xffffff, 0.5));

    const pointLight1 = new THREE.PointLight(0xffffff, 1);
    pointLight1.position.set(10, 10, 10);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xfbbf24, 0.8);
    pointLight2.position.set(-10, -10, -10);
    scene.add(pointLight2);

    // Sprites
    const sprites: THREE.Sprite[] = [];

    let loadedCount = 0;

    techSkills.forEach((skill, index) => {
      const phi = Math.acos(1 - 2 * (index + 0.5) / techSkills.length);
      const theta = Math.PI * (1 + Math.sqrt(5)) * (index + 0.5);

      const x = 6 * Math.cos(theta) * Math.sin(phi);
      const y = 6 * Math.sin(theta) * Math.sin(phi);
      const z = 6 * Math.cos(phi);

      // Canvas for fallback & image drawing
      const canvas = document.createElement("canvas");
      canvas.width = 128;
      canvas.height = 128;
      const ctx = canvas.getContext("2d")!;
      ctx.fillStyle = "#fef3c7";
      ctx.beginPath();
      ctx.arc(64, 64, 60, 0, Math.PI * 2);
      ctx.fill();

      const texture = new THREE.CanvasTexture(canvas);

      const spriteMaterial = new THREE.SpriteMaterial({
        map: texture,
        transparent: true,
      });

      const sprite = new THREE.Sprite(spriteMaterial);
      sprite.position.set(x, y, z);
      sprite.scale.set(1.5, 1.5, 1);

      // Type-safe userData
      sprite.userData = {
        skill,
        originalScale: 1.5,
      };

      scene.add(sprite);
      sprites.push(sprite);

      const img = new Image();
      img.crossOrigin = "anonymous";

      img.onload = () => {
        ctx.clearRect(0, 0, 128, 128);
        ctx.fillStyle = "#fef3c7";
        ctx.beginPath();
        ctx.arc(64, 64, 60, 0, Math.PI * 2);
        ctx.fill();

        ctx.save();
        ctx.beginPath();
        ctx.arc(64, 64, 55, 0, Math.PI * 2);
        ctx.clip();
        ctx.drawImage(img, 14, 14, 100, 100);
        ctx.restore();

        texture.needsUpdate = true;

        loadedCount++;
        if (loadedCount === techSkills.length) setIsLoading(false);
      };

      img.onerror = () => {
        ctx.clearRect(0, 0, 128, 128);
        ctx.fillStyle = "#fbbf24";
        ctx.beginPath();
        ctx.arc(64, 64, 60, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = "#78350f";
        ctx.font = "bold 16px Arial";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        const words = skill.name.split(" ");
        words.forEach((word, i) => {
          ctx.fillText(word, 64, 64 + (i - words.length / 2 + 0.5) * 20);
        });

        texture.needsUpdate = true;

        loadedCount++;
        if (loadedCount === techSkills.length) setIsLoading(false);
      };

      img.src = skill.img;
    });

    // Interaction
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const onMouseMove = (event: MouseEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();

      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(sprites);

      sprites.forEach((sprite) => {
        const scale = sprite.userData.originalScale;
        sprite.scale.set(scale, scale, 1);
      });

      if (intersects.length > 0) {
        const sprite = intersects[0].object as THREE.Sprite;
        sprite.scale.set(2.2, 2.2, 1);
        setHoveredSkill(sprite.userData.skill);
      } else {
        setHoveredSkill(null);
      }
    };

    renderer.domElement.addEventListener("mousemove", onMouseMove);

    // Animation
    const rotationSpeed = 0.002;

    const animate = () => {
      requestAnimationFrame(animate);

      globe.rotation.y += rotationSpeed;
      wireframe.rotation.y += rotationSpeed;

      sprites.forEach((sprite) => {
        sprite.position.applyAxisAngle(
          new THREE.Vector3(0, 1, 0),
          rotationSpeed
        );
      });

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const onResize = () => {
      if (!mountRef.current) return;

      camera.aspect =
        mountRef.current.clientWidth / mountRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(
        mountRef.current.clientWidth,
        mountRef.current.clientHeight
      );
    };

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      renderer.domElement.removeEventListener("mousemove", onMouseMove);

      mountRef.current?.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return (
    <div className="w-full h-screen bg-gray-900 flex flex-col items-center justify-center relative"  id="stack">
      <div className="absolute top-8 text-center z-10">
        <h1 className="text-5xl font-bold text-white mb-2">Welcome to my World (Tech Stack)</h1>
        <p className="text-gray-300">Hover to Learn More</p>
      </div>

      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-90 z-20 text-white text-xl">
          Loading Tech Stack Globe...
        </div>
      )}

      <div ref={mountRef} className="w-full h-full" />

      {hoveredSkill && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white bg-opacity-90 px-6 py-4 rounded-lg shadow-2xl z-20">
          <h3 className="text-2xl font-bold text-gray-800">
            {hoveredSkill.name}
          </h3>
          <p className="text-gray-600">{hoveredSkill.category}</p>
        </div>
      )}
    </div>
  );
}
