import { PropsWithChildren } from 'react'

import Meta, { MetaProps } from '@/utils/Meta'

import s from './layout.module.scss'

export default function Layout({
	title,
	description,
	children
}: PropsWithChildren<MetaProps>) {
	return (
		<>
			<Meta title={title} description={description} />
			<div className={s.root}>{children}</div>
		</>
	)
}
