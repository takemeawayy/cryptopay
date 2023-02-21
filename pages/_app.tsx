import localFont from '@next/font/local'
import type { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast'

import '@/styles/globals.scss'

const myFont = localFont({ src: './fonts/CartographCF-Regular.woff2' })

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<style jsx global>{`
				html,
				body {
					font-family: ${myFont.style.fontFamily};
				}
			`}</style>
			<Component {...pageProps} />
			<Toaster />
		</>
	)
}
