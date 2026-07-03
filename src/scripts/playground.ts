/**
 * 3D playground scene — Clawd (voxel), Figma logo (extruded),
 * black glossy torus and a ribbon-ish knot.
 *
 * The ribbon is a procedural approximation; to use an exact model,
 * export a GLB and load it in `buildRibbon()` with GLTFLoader instead.
 */
import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { gsap, ScrollTrigger, reducedMotion } from './app';

/* ----------------------------------------------
   Materials
   ---------------------------------------------- */
const blackGloss = () =>
  new THREE.MeshPhysicalMaterial({
    color: 0x111111,
    roughness: 0.18,
    metalness: 0.1,
    clearcoat: 1,
    clearcoatRoughness: 0.12,
  });

/* ----------------------------------------------
   Clawd — Anthropic's mascot: orange boxy head,
   square eyes, side tabs and comb legs
   ---------------------------------------------- */
function buildClawd(): THREE.Group {
  const group = new THREE.Group();
  const orange = new THREE.MeshStandardMaterial({ color: 0xe25317, roughness: 0.5 });
  const dark = new THREE.MeshStandardMaterial({ color: 0x141414, roughness: 0.45 });

  const rbox = (
    w: number,
    h: number,
    d: number,
    mat: THREE.Material,
    x: number,
    y: number,
    z: number
  ) => {
    const mesh = new THREE.Mesh(new RoundedBoxGeometry(w, h, d, 3, 0.06), mat);
    mesh.position.set(x, y, z);
    group.add(mesh);
    return mesh;
  };

  // single body block — no head, just one solid slab
  rbox(3.4, 2, 1.3, orange, 0, 0, 0);

  // square eyes near the top of the body's front face
  rbox(0.42, 0.5, 0.12, dark, -0.75, 0.32, 0.63);
  rbox(0.42, 0.5, 0.12, dark, 0.75, 0.32, 0.63);

  // two little arms on the sides
  rbox(0.6, 0.7, 0.9, orange, -1.95, -0.2, 0);
  rbox(0.6, 0.7, 0.9, orange, 1.95, -0.2, 0);

  // comb legs under the body
  for (let i = 0; i < 4; i++) {
    rbox(0.42, 0.7, 1.1, orange, -1.2 + i * 0.8, -1.1, 0);
  }

  return group;
}

/* ----------------------------------------------
   Figma logo — extruded shapes
   ---------------------------------------------- */
function buildFigma(): THREE.Group {
  const group = new THREE.Group();
  const r = 0.5;
  const depth = 0.36;

  const extrude: THREE.ExtrudeGeometryOptions = {
    depth,
    bevelEnabled: true,
    bevelThickness: 0.03,
    bevelSize: 0.03,
    // keep the beveled contour inside the shape outline so adjacent
    // pieces don't overlap and z-fight at the seams
    bevelOffset: -0.03,
    bevelSegments: 3,
    curveSegments: 32,
  };

  // left-column piece: semicircular left side, flat right edge
  const leftPill = new THREE.Shape();
  leftPill.moveTo(r, r);
  leftPill.lineTo(0, r);
  leftPill.absarc(0, 0, r, Math.PI / 2, Math.PI * 1.5, false);
  leftPill.lineTo(r, -r);
  leftPill.closePath();

  // top-right piece: flat left edge, semicircular right side
  const rightPill = new THREE.Shape();
  rightPill.moveTo(-r, -r);
  rightPill.lineTo(0, -r);
  rightPill.absarc(0, 0, r, -Math.PI / 2, Math.PI / 2, false);
  rightPill.lineTo(-r, r);
  rightPill.closePath();

  const circle = new THREE.Shape();
  circle.absarc(0, 0, r, 0, Math.PI * 2, false);

  // bottom piece: rounded top-left corner, semicircular bottom
  const bottomPiece = new THREE.Shape();
  bottomPiece.moveTo(r, r);
  bottomPiece.lineTo(0, r);
  bottomPiece.absarc(0, 0, r, Math.PI / 2, Math.PI, false);
  bottomPiece.absarc(0, 0, r, Math.PI, Math.PI * 2, false);
  bottomPiece.closePath();

  const mat = (hex: number) =>
    new THREE.MeshStandardMaterial({ color: hex, roughness: 0.35, metalness: 0 });

  const parts: Array<[THREE.Shape, number, number, number]> = [
    // [shape, color, x, y] — cells are 1 unit, columns at x=-0.5 / 0.5
    [leftPill, 0xf24e1e, -0.5, 1],
    [rightPill, 0xff7262, 0.5, 1],
    [leftPill, 0xa259ff, -0.5, 0],
    [circle, 0x1abcfe, 0.5, 0],
    [bottomPiece, 0x0acf83, -0.5, -1],
  ];

  parts.forEach(([shape, color, x, y]) => {
    const geo = new THREE.ExtrudeGeometry(shape, extrude);
    geo.translate(0, 0, -depth / 2);
    const mesh = new THREE.Mesh(geo, mat(color));
    mesh.position.set(x, y, 0);
    group.add(mesh);
  });

  return group;
}

/* ----------------------------------------------
   Ribbon — bow-like knot (procedural approximation).
   Swap for a GLB via GLTFLoader for the exact model.
   ---------------------------------------------- */
function buildRibbon(): THREE.Mesh {
  class BowCurve extends THREE.Curve<THREE.Vector3> {
    constructor() {
      super();
    }

    getPoint(t: number, target = new THREE.Vector3()) {
      const a = t * Math.PI * 2;
      return target.set(
        Math.sin(2 * a) * 1.15,
        Math.sin(a) * 0.65,
        Math.cos(3 * a) * 0.32
      );
    }
  }

  const geo = new THREE.TubeGeometry(new BowCurve(), 220, 0.17, 24, true);
  return new THREE.Mesh(geo, blackGloss());
}

/* ----------------------------------------------
   Torus
   ---------------------------------------------- */
function buildTorus(): THREE.Mesh {
  const geo = new THREE.TorusGeometry(0.85, 0.36, 48, 96);
  return new THREE.Mesh(geo, blackGloss());
}

/* ----------------------------------------------
   Scene
   ---------------------------------------------- */
export function initPlayground(canvas: HTMLCanvasElement, section: HTMLElement) {
  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true,
    powerPreference: 'high-performance',
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;

  const scene = new THREE.Scene();

  // soft studio reflections for the glossy blacks
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  scene.environmentIntensity = 0.5;

  const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 50);
  camera.position.z = 9;

  scene.add(new THREE.AmbientLight(0xffffff, 0.4));
  const key = new THREE.DirectionalLight(0xffffff, 1.4);
  key.position.set(4, 6, 6);
  scene.add(key);
  const rim = new THREE.DirectionalLight(0xffffff, 0.7);
  rim.position.set(-6, -2, -4);
  scene.add(rim);

  /* objects — positions given as fractions of visible width/height */
  const clawd = buildClawd();
  const figma = buildFigma();
  const ribbon = buildRibbon();
  const torus = buildTorus();

  figma.rotation.set(0.25, -0.4, 0.12);
  clawd.rotation.set(0.12, -0.35, 0.04);
  ribbon.rotation.set(0.7, 0.2, -0.4);
  torus.rotation.set(1.1, 0.3, 0.2);

  const items: Array<{
    obj: THREE.Object3D;
    fx: number; // fraction of half visible width
    fy: number; // fraction of half visible height
    spin: number;
    base: number; // design scale on desktop
  }> = [
    { obj: figma, fx: -0.62, fy: 0.55, spin: 0.25, base: 0.42 },
    { obj: clawd, fx: 0.7, fy: 0.34, spin: 0.18, base: 0.34 },
    { obj: ribbon, fx: -0.66, fy: -0.52, spin: 0.32, base: 1 },
    { obj: torus, fx: 0.6, fy: -0.55, spin: 0.22, base: 1 },
  ];
  items.forEach(({ obj }) => scene.add(obj));

  /* layout */
  function layout() {
    const w = section.clientWidth;
    const h = section.clientHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();

    const visH = 2 * Math.tan((camera.fov * Math.PI) / 360) * camera.position.z;
    const visW = visH * camera.aspect;
    const mobile = camera.aspect < 0.85;

    items.forEach(({ obj, fx, fy, base }) => {
      obj.position.set((fx * visW) / 2, (fy * visH) / 2, 0);
      obj.scale.setScalar(mobile ? base * 0.55 : base);
    });
  }
  layout();
  window.addEventListener('resize', layout);

  /* mouse parallax */
  const mouse = { x: 0, y: 0 };
  window.addEventListener('pointermove', (e) => {
    mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -((e.clientY / window.innerHeight) * 2 - 1);
  });

  /* scroll-driven extra rotation */
  const scroll = { p: 0 };
  ScrollTrigger.create({
    trigger: section,
    start: 'top bottom',
    end: 'bottom top',
    scrub: true,
    onUpdate: (self) => {
      scroll.p = self.progress;
    },
  });

  /* render loop — paused when offscreen */
  let visible = false;
  const start = performance.now();

  // anchor rotations: objects sway around their starting pose
  // (max ~0.2 rad) instead of spinning full turns
  const baseRot = items.map(({ obj }) => obj.rotation.clone());

  function render() {
    if (!visible) return;
    const t = (performance.now() - start) / 1000;

    items.forEach(({ obj, spin }, i) => {
      // gentle float
      obj.position.y += Math.sin(t * 0.9 + i * 1.7) * 0.0016;
      // bounded sway — never flips over
      obj.rotation.y = baseRot[i].y + Math.sin(t * spin * 2 + i * 1.3) * 0.2;
      obj.rotation.x = baseRot[i].x + Math.cos(t * spin * 1.6 + i * 0.7) * 0.09;
    });

    // scroll adds a coordinated tilt to the whole scene
    scene.rotation.x = (scroll.p - 0.5) * 0.35;

    // mouse parallax (lerped)
    scene.rotation.y += (mouse.x * 0.12 - scene.rotation.y) * 0.05;
    camera.position.y += (mouse.y * 0.3 - camera.position.y) * 0.05;
    camera.lookAt(0, 0, 0);

    renderer.render(scene, camera);
  }

  if (reducedMotion) {
    // single static frame
    visible = true;
    render();
    visible = false;
  } else {
    gsap.ticker.add(render);
  }

  const io = new IntersectionObserver(
    ([entry]) => {
      visible = entry.isIntersecting;
    },
    { rootMargin: '100px' }
  );
  io.observe(section);
}
