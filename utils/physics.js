export class PhysicsNode {
  constructor(x, y, label) {
    this.x = x;
    this.y = y;
    this.px = x; // previous position for Verlet
    this.py = y;
    this.label = label;
    this.radius = 60;
  }

  // gentle drifting motion
  applyDrift() {
    const driftX = (Math.random() - 0.5) * 0.2;
    const driftY = (Math.random() - 0.5) * 0.2;

    this.x += driftX;
    this.y += driftY;
  }

  update() {
    const vx = this.x - this.px;
    const vy = this.y - this.py;

    this.px = this.x;
    this.py = this.y;

    this.x += vx * 0.98;
    this.y += vy * 0.98;

    this.applyDrift();
  }

  // keeps nodes inside screen
  constrain(width, height) {
    const padding = 80;
    if (this.x < padding) this.x = padding;
    if (this.x > width - padding) this.x = width - padding;
    if (this.y < padding) this.y = padding;
    if (this.y > height - padding) this.y = height - padding;
  }
}

export function linkNodes(nodes) {
  const links = [];

  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      if (Math.random() < 0.17) {
        links.push([nodes[i], nodes[j]]);
      }
    }
  }

  return links;
}
