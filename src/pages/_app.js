import ParticlesComponents from '@/components/Particles';
import '@/styles/globals.css'
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
		<Head>
			<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
		</Head>
		
		<ParticlesComponents />
		<AnimatePresence wait>
			<motion.div 
				key={router.route}
				initial="initialState"
				animate="animateState"
				exit="exitState"
				transition={{
				duration: 0.75,
				}}
				variants={{
				initialState: {
					opacity: 0,
				},
				animateState: {
					opacity: 1,
				},
				exitState: {

				},
				}}
			>
				<div className='container mx-auto'>
					<Component {...pageProps} />
				</div>
			</motion.div>
		</AnimatePresence>
    </>
  );
}
