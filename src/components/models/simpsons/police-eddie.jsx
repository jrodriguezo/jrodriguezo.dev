import React, { useEffect, useLayoutEffect, useRef } from 'react'
import { useFrame, useGraph } from '@react-three/fiber'
import { useGLTF, useAnimations, useScroll } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'
import gsap from 'gsap'

const PoliceEddie = (props) => {
  const group = React.useRef()
  const { scene, animations } = useGLTF('/models/police_eddie/scene.gltf')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  const { actions, names } = useAnimations(animations, group)
  
  const scroll = useScroll()

  useEffect(() => {
    // console.log({actions, names})
    actions[names[0]].play().paused = true
    // actions[names[0]].reset().fadeIn(0.5).play();
    return () => {
     // actions[names[0]].fadeOut(0.5)
    };
  }, []);

  const tl = useRef();

  useFrame((frame) => {
    // console.log(    actions[names[0]], actions[names[0]].getClip().duration, scroll.offset)
    actions[names[0]].time = (actions[names[0]].getClip().duration * scroll.offset) / 1
    group.current.position.z = scroll.offset * 5; 
    // tl.current.seek(scroll.offset * tl.current.duration());
  });

  useLayoutEffect(() => {
    tl.current = gsap.timeline();

    tl.current.to(
      group.current.position,
      {
        x: 0,
      },
      10
    );
},[])

  
  
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={1.757}>
          <group name="86818a2105fd457f956f9560fe6e0c87fbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Object_4">
                  <primitive object={nodes._rootJoint} />
                  <group name="Object_6" rotation={[-Math.PI / 2, 0, 0]} />
                  <group name="Eddie" rotation={[-Math.PI / 2, 0, 0]} />
                  <skinnedMesh name="Object_7" geometry={nodes.Object_7.geometry} material={materials['02_-_Default']} skeleton={nodes.Object_7.skeleton} />
                  <skinnedMesh name="Object_8" geometry={nodes.Object_8.geometry} material={materials.char_swatches_lit_m_006} skeleton={nodes.Object_8.skeleton} />
                  <skinnedMesh name="Object_9" geometry={nodes.Object_9.geometry} material={materials.jimbo_m} skeleton={nodes.Object_9.skeleton} />
                  <skinnedMesh name="Object_10" geometry={nodes.Object_10.geometry} material={materials.shield_m} skeleton={nodes.Object_10.skeleton} />
                  <skinnedMesh name="Object_11" geometry={nodes.Object_11.geometry} material={materials['03_-_Default']} skeleton={nodes.Object_11.skeleton} />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

export default PoliceEddie

useGLTF.preload('/models/police_eddie/scene.gltf')
