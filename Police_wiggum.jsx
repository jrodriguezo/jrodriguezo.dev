import React, { useEffect } from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'



const PoliceWiggum = (props) => {
  const group = React.useRef()
  const { scene, animations } = useGLTF('./models/police_wiggum/scene.gltf')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  const { actions, names } = useAnimations(animations, group)

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="Dwarf_Idlefbx" rotation={[Math.PI / 2, 0, 0]} scale={0.025}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Object_4">
                  <primitive object={nodes._rootJoint} />
                  <group name="Object_6" scale={0.394} />
                  <group name="Mesh_0_0_Mesh" position={[-4.115, 3.729, -4.228]} scale={116.909} />
                  <skinnedMesh castShadow name="Object_7" geometry={nodes.Object_7.geometry} material={materials.Material_40} skeleton={nodes.Object_7.skeleton} />
                  <skinnedMesh castShadow name="Object_8" geometry={nodes.Object_8.geometry} material={materials.Material_53} skeleton={nodes.Object_8.skeleton} />
                  <skinnedMesh castShadow name="Object_9" geometry={nodes.Object_9.geometry} material={materials.Material_66} skeleton={nodes.Object_9.skeleton} />
                  <skinnedMesh castShadow name="Object_10" geometry={nodes.Object_10.geometry} material={materials.Material_79} skeleton={nodes.Object_10.skeleton} />
                  <skinnedMesh castShadow name="Object_11" geometry={nodes.Object_11.geometry} material={materials.Material_28} skeleton={nodes.Object_11.skeleton} />
                  <skinnedMesh castShadow name="Object_12" geometry={nodes.Object_12.geometry} material={materials.Material_27} skeleton={nodes.Object_12.skeleton} />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

export default PoliceWiggum

useGLTF.preload('./models/police_wiggum/scene.gltf')
