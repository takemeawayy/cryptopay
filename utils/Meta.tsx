import Head from 'next/head'

export interface MetaProps {
	title: string
	description: string
}

export const DOMAIN = 'textdomain.com'

export default function Meta({ description, title }: MetaProps) {
	return (
		<Head>
			<title key='title'>{title}</title>
			<meta key='description' name='description' content={description} />

			<meta charSet='utf-8' />
			<meta
				key='viewport'
				name='viewport'
				content='width=device-width, initial-scale=1'
			/>
			{/* <meta key='itemprop' itemProp='image' content={image} /> */}
			<meta key='og:type' property='og:type' content='website' />
			<meta
				key='og:logo'
				property='og:logo'
				content={`${DOMAIN}/logo.png`}
			></meta>
			<meta key='og:title' property='og:title' content={title} />
			<meta
				key='og:description'
				property='og:description'
				content={description}
			/>
			<meta key='og:url' property='og:url' content={DOMAIN}></meta>
			{/* <meta key='og:image' property='og:image' content={image} /> */}

			<meta
				key='twitter:card'
				name='twitter:card'
				content='summary_large_image'
			/>
			<meta key='twitter:site' name='twitter:site' content='@zelenkaguru' />
			<meta key='twitter:creator' name='twitter:creator' content='@fantasy' />
			<meta key='twitter:title' name='twitter:title' content={title} />
			<meta
				key='twitter:description'
				name='twitter:description'
				content={description}
			/>
			{/* <meta key='twitter:image' name='twitter:image' content={image} /> */}
		</Head>
	)
}
