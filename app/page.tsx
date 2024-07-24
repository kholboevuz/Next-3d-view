import { NextPage } from 'next'
import dynamic from 'next/dynamic'

const ModelViewer = dynamic(() => import('@/components/ModelView/Model3d'), {
	ssr: false,
})

const ModelViewerGlb = dynamic(
	() => import('@/components/ModelView/Model3dglb'),
	{
		ssr: false,
	}
)

const Home: NextPage = () => {
	const modelUrl = process.env.NEXT_PUBLIC_MODEL_URL || ''
	return (
		<div
			style={{ backgroundColor: '#011C53' }}
			className='h-screen flex justify-center items-center'
		>
			<ModelViewer modelUrl={modelUrl} />
			{/* <ModelViewerGlb modelUrl={modelUrl} /> */}
		</div>
	)
}

export default Home

