//.glb uchun code

'use client'
import { OrbitControls } from '@react-three/drei'
import { Canvas, useLoader } from '@react-three/fiber'
import React, { Suspense, useState } from 'react'
import { Object3D } from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import Loading from '../Loading/Loading'

type ModelProps = {
	url: string
}

const Model: React.FC<ModelProps> = ({ url }) => {
	const gltf = useLoader(GLTFLoader, url)
	const obj = gltf.scene as Object3D

	//Avtomatik model aylanib turadi (Commentdan chiqarilsa)

	// useFrame(({ clock }) => {
	// 	obj.rotation.y = clock.getElapsedTime()
	// })

	return <primitive object={obj} />
}

type ModelViewerProps = {
	modelUrl: string
}

const ModelViewerGlb: React.FC<ModelViewerProps> = ({ modelUrl }) => {
	const [loading, setLoading] = useState(true)
	setTimeout(() => {
		setLoading(false)
	}, 4000)
	return (
		<>
			{loading && <Loading />}
			<Canvas className={loading ? 'hidden' : ''}>
				<Suspense fallback={null}>
					<ambientLight intensity={0.5} />
					<directionalLight position={[10, 10, 5]} intensity={1.5} />
					<Model url={modelUrl} />
					<OrbitControls />
				</Suspense>
			</Canvas>
		</>
	)
}

export default ModelViewerGlb
