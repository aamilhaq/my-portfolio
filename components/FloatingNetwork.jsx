"use client";
import { useEffect, useRef, useState } from "react";
import { networkNodes } from "@/data/networkNodes";
import { PhysicsNode, linkNodes } from "@/utils/physics";

export default function FloatingNetwork() {
  const canvasRef = useRef();
  const tooltipRef = useRef();
  const [hoverNode, setHoverNode] = useState(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // init physics nodes
    const nodes = networkNodes.map((data) => {
      return new PhysicsNode(
        Math.random() * width,
        Math.random() * height,
        data
      );
    });

    const links = linkNodes(nodes);

    function draw() {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "#f3f1e7";
      ctx.fillRect(0, 0, width, height);

      // draw links
      ctx.strokeStyle = "rgba(0,0,0,0.12)";
      ctx.lineWidth = 1;
      links.forEach(([a, b]) => {
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      });

      // draw nodes
      nodes.forEach((n) => {
        ctx.beginPath();
        ctx.fillStyle = "#111";
        ctx.arc(n.x, n.y, 6, 0, Math.PI * 2);
        ctx.fill();

        ctx.font = "14px Inter";
        ctx.fillText(n.label, n.x + 12, n.y + 4);
      });
    }

    function animate() {
      nodes.forEach((n) => {
        n.update();
        n.constrain(width, height);
      });

      draw();
      requestAnimationFrame(animate);
    }

    animate();

    // resize handler
    const resize = () => {
      width = (canvas.width = window.innerWidth);
      height = (canvas.height = window.innerHeight);
    };
    window.addEventListener("resize", resize);

    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <section
      className="w-full h-screen relative"
      style={{ background: "#f3f1e7" }}
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </section>
  );
}
