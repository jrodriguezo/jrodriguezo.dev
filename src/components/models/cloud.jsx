/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 public/models/cloud/scene.gltf 
Author: RunemarkStudio (https://sketchfab.com/runemarkstudio)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/cartoon-cloud-f31be54812a348df86d94171098dae19
Title: Cartoon Cloud
*/

import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Cloud = (props) => {
  const { stopped = true, initialDirection = 1, ...restOfProps } = props;
  const { nodes, materials } = useGLTF("/models/cloud/scene.gltf");
  const [hovered, setHovered] = useState(false);
  const [position, setPosition] = useState(props.position);

  let hoverTimeout;

  const groupRef = useRef();

  let direction = initialDirection;
  let speed = 0.01;
  const amplitude = 5;

  const handleHover = (event) => {
    clearTimeout(hoverTimeout); // Limpia el timeout anterior para evitar múltiples ejecuciones
    hoverTimeout = setTimeout(() => {
      direction = -direction;
      setHovered(true);
      // Mueve el modelo hacia arriba al hacer hover
      // setPosition([7, groupRef.current.position.y, -2]);
    }, 100); // Retraso de 200 ms (puedes ajustar el tiempo)
  };

  const handleUnhover = (event) => {
    clearTimeout(hoverTimeout); // Limpia el timeout también cuando se sale del hover
    hoverTimeout = setTimeout(() => {
      setHovered(false);
      // Restablece la posición
      // setPosition([7, groupRef.current.position.y, -2]);
    }, 10000); // Retraso de 200 ms
  };

  useFrame(() => {
    if (groupRef.current && !stopped) {
      groupRef.current.position.x += speed * direction;
      if (groupRef.current.position.x > amplitude) direction = -1;
      else if (groupRef.current.position.x < -amplitude) direction = 1;
    }
  });

  return (
    <group
      {...restOfProps}
      ref={groupRef}
      onPointerOver={handleHover}
      // onPointerOut={handleUnhover}
      position={position}
      dispose={null}
    >
      <mesh
        geometry={nodes.Object_2.geometry}
        material={materials.Material}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  );
};

useGLTF.preload("/models/cloud/scene.gltf");

export default Cloud;
