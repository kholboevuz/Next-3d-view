//.obj uchun code

'use client'
import { OrbitControls } from '@react-three/drei'
import { Canvas, useLoader } from '@react-three/fiber'
import React, { Suspense } from 'react'
import { Object3D } from 'three'
import { OBJLoader } from 'three/examples/jsm/Addons.js'

type ModelProps = {
	url: string
}

const Model: React.FC<ModelProps> = ({ url }) => {
	const obj = useLoader(OBJLoader, url) as Object3D

	//Avtomatik model aylanib turadi (Commentdan chiqarilsa)

	// useFrame(({ clock }) => {
	// 	obj.rotation.y = clock.getElapsedTime()
	// })

	return <primitive object={obj} />
}

type ModelViewerProps = {
	modelUrl: string
}

const ModelViewer: React.FC<ModelViewerProps> = ({ modelUrl }) => {
	return (
		<Canvas>
			<Suspense fallback={null}>
				<ambientLight intensity={0.5} />
				<directionalLight position={[10, 10, 5]} intensity={1.5} />
				<Model url={modelUrl} />
				<OrbitControls />
			</Suspense>
		</Canvas>
	)
}

export default ModelViewer
