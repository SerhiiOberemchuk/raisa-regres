"use client";

import * as THREE from "three";
import Nebula, { SpriteRenderer } from "three-nebula";
import json from "./particle-system.json";

import getThreeApp from "./three-app";

const ThreeNebulaWithCursor = () => {
  function animate(nebula: any, app: any) {
    requestAnimationFrame(() => animate(nebula, app));

    nebula.update();
    app.renderer.render(app.scene, app.camera);
  }

  Nebula.fromJSONAsync(json, THREE).then((loaded) => {
    const app = getThreeApp();
    const nebulaRenderer = new SpriteRenderer(app.scene, THREE);
    const nebula = loaded.addRenderer(nebulaRenderer);

    animate(nebula, app);
  });

  return <></>;
};

export default ThreeNebulaWithCursor;
