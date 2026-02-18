import { useRef } from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import {
  useGLTF,
  Caustics,
  CubeCamera,
  Environment,
  OrbitControls,
  RandomizedLight,
  AccumulativeShadows,
  MeshRefractionMaterial,
  MeshTransmissionMaterial
} from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { useControls } from 'leva'
import { RGBELoader } from 'three-stdlib'

function Diamond(props) {
  const ref = useRef()
  // const { nodes } = useGLTF('/dflat.glb')
  const { nodes, materials } = useGLTF('/blossom_diamond-ring.glb')

  // Use a custom envmap/scene-backdrop for the diamond material
  // This way we can have a clear BG while cube-cam can still film other objects
  const texture = useLoader(RGBELoader, 'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/aerodynamics_workshop_1k.hdr')
  // Optional config
  const config = useControls({
    bounces: { value: 3, min: 0, max: 8, step: 1 },
    aberrationStrength: { value: 0.01, min: 0, max: 0.1, step: 0.01 },
    ior: { value: 2.75, min: 0, max: 10 },
    fresnel: { value: 1, min: 0, max: 1 },
    color: 'white'
  })
  return (
    <CubeCamera resolution={256} frames={1} envMap={texture}>
      {(texture) => (
        <Caustics
          backfaces
          color={config.color}
          position={[0, -0.5, 0]}
          lightSource={[5, 5, -10]}
          worldRadius={0.1}
          ior={1.8}
          backfaceIor={1.1}
          intensity={0.1}>
          <group {...props} dispose={null}>
            <mesh geometry={nodes.Mesh_0.geometry} material={materials.Material_0} />
            <mesh
              geometry={nodes.Diamond_1.geometry}
              material={materials.__DEFAULT}
              position={[0.468, 0.821, 0.089]}
              rotation={[-1.567, -0.006, 0.985]}
              scale={0.014}
            ><MeshRefractionMaterial envMap={texture} {...config} toneMapped={false} /></mesh>
            <mesh
              geometry={nodes.Diamond_2.geometry}
              material={materials.__DEFAULT}
              position={[0.369, 0.827, 0.247]}
              rotation={[-Math.PI / 2, 0, 0.904]}
              scale={0.013}
            ><MeshRefractionMaterial envMap={texture} {...config} toneMapped={false} /></mesh>
            <mesh
              geometry={nodes.Diamond_3.geometry}
              material={materials.__DEFAULT}
              position={[0.086, 0.834, 0.424]}
              rotation={[1.605, 0.007, -0.958]}
              scale={-0.014}
            ><MeshRefractionMaterial envMap={texture} {...config} toneMapped={false} /></mesh>
            <mesh
              geometry={nodes.Diamond_3001.geometry}
              material={materials.__DEFAULT}
              position={[-0.09, 0.834, 0.433]}
              rotation={[1.605, 0.007, -0.958]}
              scale={-0.014}
            ><MeshRefractionMaterial envMap={texture} {...config} toneMapped={false} /></mesh>
            <mesh
              geometry={nodes.Diamond_3002.geometry}
              material={materials.__DEFAULT}
              position={[-0.243, 0.834, 0.364]}
              rotation={[1.605, 0.007, -0.958]}
              scale={-0.014}
            ><MeshRefractionMaterial envMap={texture} {...config} toneMapped={false} /></mesh>
            <mesh
              geometry={nodes.Diamond_3003.geometry}
              material={materials.__DEFAULT}
              position={[-0.369, 0.834, 0.238]}
              rotation={[1.605, 0.007, -0.958]}
              scale={-0.014}
            ><MeshRefractionMaterial envMap={texture} {...config} toneMapped={false} /></mesh>
            <mesh
              geometry={nodes.Diamond_3004.geometry}
              material={materials.__DEFAULT}
              position={[-0.429, 0.834, 0.089]}
              rotation={[1.605, 0.007, -0.958]}
              scale={-0.014}
            ><MeshRefractionMaterial envMap={texture} {...config} toneMapped={false} /></mesh>
            <mesh
              geometry={nodes.Diamond_3005.geometry}
              material={materials.__DEFAULT}
              position={[-0.431, 0.834, -0.09]}
              rotation={[1.605, 0.007, -0.958]}
              scale={-0.014}
            ><MeshRefractionMaterial envMap={texture} {...config} toneMapped={false} /></mesh>
            <mesh
              geometry={nodes.Diamond_3006.geometry}
              material={materials.__DEFAULT}
              position={[-0.357, 0.834, -0.246]}
              rotation={[1.605, 0.007, -0.958]}
              scale={-0.014}
            ><MeshRefractionMaterial envMap={texture} {...config} toneMapped={false} /></mesh>
            <mesh
              geometry={nodes.Diamond_3007.geometry}
              material={materials.__DEFAULT}
              position={[-0.231, 0.834, -0.365]}
              rotation={[1.605, 0.007, -0.958]}
              scale={-0.014}
            ><MeshRefractionMaterial envMap={texture} {...config} toneMapped={false} /></mesh>
            <mesh
              geometry={nodes.Diamond_3008.geometry}
              material={materials.__DEFAULT}
              position={[-0.094, 0.834, -0.428]}
              rotation={[1.605, 0.007, -0.958]}
              scale={-0.014}
            ><MeshRefractionMaterial envMap={texture} {...config} toneMapped={false} /></mesh>
            <mesh
              geometry={nodes.Diamond_3009.geometry}
              material={materials.__DEFAULT}
              position={[0.093, 0.834, -0.425]}
              rotation={[1.605, 0.007, -0.958]}
              scale={-0.014}
            ><MeshRefractionMaterial envMap={texture} {...config} toneMapped={false} /></mesh>
            <mesh
              geometry={nodes.Diamond_3010.geometry}
              material={materials.__DEFAULT}
              position={[0.248, 0.834, -0.357]}
              rotation={[1.605, 0.007, -0.958]}
              scale={-0.014}
            ><MeshRefractionMaterial envMap={texture} {...config} toneMapped={false} /></mesh>
            <mesh
              geometry={nodes.Diamond_3011.geometry}
              material={materials.__DEFAULT}
              position={[0.36, 0.834, -0.236]}
              rotation={[1.605, 0.007, -0.958]}
              scale={-0.014}
            ><MeshRefractionMaterial envMap={texture} {...config} toneMapped={false} /></mesh>
            <mesh
              geometry={nodes.Diamond_3012.geometry}
              material={materials.__DEFAULT}
              position={[0.425, 0.834, -0.087]}
              rotation={[1.605, 0.007, -0.958]}
              scale={-0.014}
            ><MeshRefractionMaterial envMap={texture} {...config} toneMapped={false} /></mesh>
            <mesh
              geometry={nodes.Diamond_3013.geometry}
              material={materials.__DEFAULT}
              position={[0.248, 0.834, 0.372]}
              rotation={[1.605, 0.007, -0.958]}
              scale={-0.014}
            ><MeshRefractionMaterial envMap={texture} {...config} toneMapped={false} /></mesh>
            <mesh
              geometry={nodes.Diamond_3014.geometry}
              material={materials.__DEFAULT}
              position={[0.094, 0.94, 0.268]}
              rotation={[1.298, 0.099, -0.945]}
              scale={-0.013}
            ><MeshRefractionMaterial envMap={texture} {...config} toneMapped={false} /></mesh>
            <mesh
              geometry={nodes.Diamond_3015.geometry}
              material={materials.__DEFAULT}
              position={[-0.098, 0.928, 0.264]}
              rotation={[0.984, -0.204, -1.143]}
              scale={-0.013}
            ><MeshRefractionMaterial envMap={texture} {...config} toneMapped={false} /></mesh>
            <mesh
              geometry={nodes.Diamond_3016.geometry}
              material={materials.__DEFAULT}
              position={[-0.27, 0.928, 0.089]}
              rotation={[1.53, -0.332, -1.149]}
              scale={-0.013}
            ><MeshRefractionMaterial envMap={texture} {...config} toneMapped={false} /></mesh>
            <mesh
              geometry={nodes.Diamond_3017.geometry}
              material={materials.__DEFAULT}
              position={[-0.271, 0.928, -0.1]}
              rotation={[1.698, -0.332, -1.149]}
              scale={-0.013}
            ><MeshRefractionMaterial envMap={texture} {...config} toneMapped={false} /></mesh>
            <mesh
              geometry={nodes.Diamond_3018.geometry}
              material={materials.__DEFAULT}
              position={[-0.089, 0.928, -0.258]}
              rotation={[1.892, -0.093, -1.18]}
              scale={-0.013}
            ><MeshRefractionMaterial envMap={texture} {...config} toneMapped={false} /></mesh>
            <mesh
              geometry={nodes.Diamond_3019.geometry}
              material={materials.__DEFAULT}
              position={[0.094, 0.928, -0.273]}
              rotation={[1.893, 0.125, -1.252]}
              scale={-0.013}
            ><MeshRefractionMaterial envMap={texture} {...config} toneMapped={false} /></mesh>
            <mesh
              geometry={nodes.Diamond_3020.geometry}
              material={materials.__DEFAULT}
              position={[0.268, 0.928, -0.097]}
              rotation={[1.682, 0.32, -1.274]}
              scale={-0.013}
            ><MeshRefractionMaterial envMap={texture} {...config} toneMapped={false} /></mesh>
            <mesh
              geometry={nodes.Diamond_3021.geometry}
              material={materials.__DEFAULT}
              position={[0.272, 0.928, 0.094]}
              rotation={[1.448, 0.452, -1.257]}
              scale={-0.013}
            ><MeshRefractionMaterial envMap={texture} {...config} toneMapped={false} /></mesh>
            <mesh
              geometry={nodes.Diamond_3022.geometry}
              material={materials.__DEFAULT}
              position={[-0.004, 0.859, 0.306]}
              rotation={[1.18, 0.007, -0.958]}
              scale={-0.011}
            ><MeshRefractionMaterial envMap={texture} {...config} toneMapped={false} /></mesh>
            <mesh
              geometry={nodes.Diamond_3023.geometry}
              material={materials.__DEFAULT}
              position={[-0.225, 0.859, 0.224]}
              rotation={[1.256, -0.405, -1.139]}
              scale={-0.011}
            ><MeshRefractionMaterial envMap={texture} {...config} toneMapped={false} /></mesh>
            <mesh
              geometry={nodes.Diamond_3024.geometry}
              material={materials.__DEFAULT}
              position={[-0.323, 0.859, -0.007]}
              rotation={[1.57, -0.405, -1.139]}
              scale={-0.011}
            ><MeshRefractionMaterial envMap={texture} {...config} toneMapped={false} /></mesh>
            <mesh
              geometry={nodes.Diamond_3025.geometry}
              material={materials.__DEFAULT}
              position={[-0.228, 0.859, -0.228]}
              rotation={[1.91, -0.308, -1.025]}
              scale={-0.011}
            ><MeshRefractionMaterial envMap={texture} {...config} toneMapped={false} /></mesh>
            <mesh
              geometry={nodes.Diamond_3026.geometry}
              material={materials.__DEFAULT}
              position={[0.005, 0.859, -0.315]}
              rotation={[1.993, -0.026, -1.132]}
              scale={-0.011}
            ><MeshRefractionMaterial envMap={texture} {...config} toneMapped={false} /></mesh>
            <mesh
              geometry={nodes.Diamond_3027.geometry}
              material={materials.__DEFAULT}
              position={[0.223, 0.859, -0.225]}
              rotation={[1.845, 0.293, -1.186]}
              scale={-0.011}
            ><MeshRefractionMaterial envMap={texture} {...config} toneMapped={false} /></mesh>
            <mesh
              geometry={nodes.Diamond_3028.geometry}
              material={materials.__DEFAULT}
              position={[0.326, 0.859, 0.001]}
              rotation={[1.581, 0.293, -1.186]}
              scale={-0.011}
            ><MeshRefractionMaterial envMap={texture} {...config} toneMapped={false} /></mesh>
            <mesh
              geometry={nodes.Diamond_3029.geometry}
              material={materials.__DEFAULT}
              position={[0.228, 0.859, 0.235]}
              rotation={[1.322, 0.293, -1.186]}
              scale={-0.011}
            ><MeshRefractionMaterial envMap={texture} {...config} toneMapped={false} /></mesh>
            <mesh
              geometry={nodes.Diamond_3030.geometry}
              material={materials.__DEFAULT}
              position={[-0.005, 0.958, -0.007]}
              rotation={[1.586, 0.007, -1.25]}
              scale={-0.021}
            ><MeshRefractionMaterial envMap={texture} {...config} toneMapped={false} /></mesh>
            <mesh
              geometry={nodes.Diamond_3031.geometry}
              material={materials.__DEFAULT}
              position={[-0.122, 0.931, 0.118]}
              rotation={[1.433, -0.19, -1.002]}
              scale={-0.013}
            ><MeshRefractionMaterial envMap={texture} {...config} toneMapped={false} /></mesh>
            <mesh
              geometry={nodes.Diamond_3032.geometry}
              material={materials.__DEFAULT}
              position={[-0.125, 0.931, -0.13]}
              rotation={[1.628, -0.232, -1]}
              scale={-0.013}
            ><MeshRefractionMaterial envMap={texture} {...config} toneMapped={false} /></mesh>
            <mesh
              geometry={nodes.Diamond_3033.geometry}
              material={materials.__DEFAULT}
              position={[0.128, 0.931, -0.127]}
              rotation={[1.732, 0.125, -1.058]}
              scale={-0.013}
            ><MeshRefractionMaterial envMap={texture} {...config} toneMapped={false} /></mesh>
            <mesh
              geometry={nodes.Diamond_3034.geometry}
              material={materials.__DEFAULT}
              position={[0.128, 0.931, 0.13]}
              rotation={[1.395, 0.207, -1.044]}
              scale={-0.013}
            ><MeshRefractionMaterial envMap={texture} {...config} toneMapped={false} /></mesh>
          </group>

          {/* <mesh castShadow ref={ref} geometry={nodes.Diamond_1_0.geometry} {...props}>
            <MeshRefractionMaterial envMap={texture} {...config} toneMapped={false} />
          </mesh> */}
        </Caustics>
      )}
    </CubeCamera>
  )
}

export default function App() {
  return (
    <Canvas shadows camera={{ position: [-5, 0.5, 5], fov: 45 }}>
      <color attach="background" args={['#f0f0f0']} />
      <ambientLight intensity={0.5 * Math.PI} />
      <spotLight decay={0} position={[5, 5, -10]} angle={0.15} penumbra={1} />
      <pointLight decay={0} position={[-10, -10, -10]} />
      <Diamond rotation={[0, 0, 0.715]} position={[0, -0.175 + 0.5, 0]} scale={2} />
      {/* <Caustics color="#FF8F20" position={[0, -0.5, 0]} lightSource={[5, 5, -10]} worldRadius={0.01} ior={1.2} intensity={0.005}>
        <mesh castShadow receiveShadow position={[-2, 0.5, -1]} scale={0.5}>
          <sphereGeometry args={[1, 64, 64]} />
          <MeshTransmissionMaterial resolution={1024} distortion={0.25} color="#FF8F20" thickness={1} anisotropy={1} />
        </mesh>
      </Caustics> */}
      {/* <mesh castShadow receiveShadow position={[1.75, 0.25, 1]} scale={0.75}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial color="hotpink" />
      </mesh> */}
      <AccumulativeShadows
        temporal
        frames={100}
        color="orange"
        colorBlend={2}
        toneMapped={true}
        alphaTest={0.7}
        opacity={1}
        scale={12}
        position={[0, -0.5, 0]}>
        <RandomizedLight amount={8} radius={10} ambient={0.5} position={[5, 5, -10]} bias={0.001} />
      </AccumulativeShadows>
      <Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/aerodynamics_workshop_1k.hdr" />
      <OrbitControls makeDefault autoRotate autoRotateSpeed={0.1} minPolarAngle={0} maxPolarAngle={Math.PI / 2} />
      <EffectComposer>
        <Bloom luminanceThreshold={1} intensity={2} levels={9} mipmapBlur />
      </EffectComposer>
    </Canvas>
  )
}
