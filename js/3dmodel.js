import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { PerspectiveCamera, AmbientLight } from "three";

const loader = new GLTFLoader();
const scene = new THREE.Scene();
const camera = new PerspectiveCamera(75, 500 / 500, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true });

// Set renderer size to 500px by 500px
renderer.setSize(500, 500);
const canvasContainer = document.getElementById("canvas-container");
canvasContainer.appendChild(renderer.domElement);

// Add OrbitControls
const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(0, 0, 0);

// Add ambient light
const ambientLight = new AmbientLight(0xffffff);
ambientLight.intensity = 4;
scene.add(ambientLight);

// Adjust renderer size on window resize
window.addEventListener("resize", () => {
  camera.aspect = 1;
  camera.updateProjectionMatrix();
  renderer.setSize(500, 500);
});

// Load GLTF model
loader.load(
  "./models/matilda/scene.gltf",
  function (gltf) {
    const model = gltf.scene;

    model.traverse((child) => {
      if (child.isMesh) {
        if (child.material.map) {
          const material = new THREE.MeshStandardMaterial({
            map: child.material.map,
          });
          child.material = material;
        }
      }
    });

    // Calculate the center of the model's bounding box
    const boundingBox = new THREE.Box3().setFromObject(model);
    const modelCenter = boundingBox.getCenter(new THREE.Vector3());

    // Move the model so its center aligns with the center of the scene
    model.position.sub(modelCenter);

    scene.add(model);

    animate();
  },
  function (xhr) {
    console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
  },
  function (error) {
    console.error("Error loading GLTF file:", error);
  }
);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}

animate();
