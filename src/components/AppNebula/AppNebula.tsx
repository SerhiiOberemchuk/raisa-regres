// import React from "react";
// import { Canvas, useThree, useFrame, render } from "react-three-fiber";
// import * as THREE from "three";
// import niceColors from "nice-color-palettes/1000";

// import System, {
//   Emitter,
//   Rate,
//   Span,
//   Position,
//   Mass,
//   Radius,
//   Life,
//   PointZone,
//   LineZone,
//   Vector3D,
//   Alpha,
//   Scale,
//   Color,
//   Body,
//   RadialVelocity,
//   MeshRenderer,
//   SpriteRenderer,
//   BodySprite,
//   Debug,
//   Gravity,
// } from "three-nebula";

// import "./styles.css";
// import Effects from "./Effects";

// const COLORS = niceColors[100];

// function OhBaby() {
//   const { scene } = useThree();

//   const emitter = React.useRef();
//   const system = React.useRef();
//   const col = React.useRef(new THREE.Color("#4cd3c2"));

//   React.useEffect(() => {
//     function createSprite() {
//       var map = new THREE.TextureLoader().load("./img/dot.png");
//       var material = new THREE.SpriteMaterial({
//         map: map,
//         color: 0xfffff,
//         blending: THREE.AdditiveBlending,
//         fog: true,
//       });
//       return new THREE.Sprite(material);
//     }

//     system.current = new System();
//     emitter.current = new Emitter();
//     const renderer = new SpriteRenderer(scene, THREE);

//     // const zone = new LineZone(0, 0, 0, 0, 30, 0);
//     const zone = new PointZone(0, 0);

//     emitter.current
//       .setRate(new Rate(new Span(4, 16), new Span(0.01)))
//       .setInitializers([
//         new Position(zone),
//         new Mass(1),
//         new Radius(6, 12),
//         new Life(3),
//         new Body(createSprite()),
//         new RadialVelocity(60, new Vector3D(0, 1, 0), 180),
//       ])
//       .setBehaviours([new Alpha(1, 0), new Scale(1, 2), new Color(col.current)])
//       .emit();

//     // Debug.drawEmitter(THREE, system.current, scene, emitter.current);

//     system.current.addEmitter(emitter.current).addRenderer(renderer);

//     return () => {
//       emitter.current.destroy();
//       system.current.destroy();
//     };
//   }, [scene]);

//   var ctha = React.useRef(0);
//   var r = React.useRef(500);
//   var tha = React.useRef(0);

//   useFrame(({ clock }) => {
//     var delta = clock.getDelta();

//     delta < 5 / 60 && system.current.update();
//     tha.current += Math.PI / 150;
//     var p = 300 * Math.sin(2 * tha.current);

//     emitter.current.position.x = p * Math.cos(tha.current);
//     emitter.current.position.y = p * Math.sin(tha.current);
//     emitter.current.position.z = (p * Math.tan(tha.current)) / 2;

//     ctha.current += 0.016;
//     r.current = 300;
//   });

//   return null;
// }

// function AppNebula() {
//   const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

//   return (
//     <>
//       <Canvas
//         pixelRatio={Math.min(2, isMobile ? window.devicePixelRatio : 1)}
//         gl={{ antialias: false, alpha: false }}
//         camera={{ position: [0, 0, -200], near: 5, far: 1000 }}
//         onCreated={({ gl }) => {
//           gl.toneMapping = THREE.ACESFilmicToneMapping;
//         }}
//       >
//         <color attach="background" args={[new THREE.Color(0x121212)]} />
//         <ambientLight intensity={1} />
//         <OhBaby />
//         <Effects />
//       </Canvas>
//     </>
//   );
// }

// export default AppNebula;
