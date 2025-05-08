import * as THREE from "three";
var element = document.querySelector(".element");
var width = element.clientWidth;
var height = element.clientHeight;
var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
camera.position.z = 5;
var renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);
element.appendChild(renderer.domElement);
renderer.render(scene, camera);
var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
var cube = new THREE.Mesh(geometry, material);
