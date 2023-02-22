import cn from 'classnames'
import { JSXElementConstructor, PropsWithChildren } from 'react'

import s from './title.module.scss'

interface TitleProps {
	Component?: string | JSXElementConstructor<any>
	className?: string
	type?: 'main' | 'default'
}

export default function Title({
	children,
	Component = 'div',
	className,
	type = 'default'
}: PropsWithChildren<TitleProps>) {
	const rootClassname = cn(
		s.root,
		{
			[s.main]: type === 'main'
		},
		className
	)

	return <Component className={rootClassname}>{children}</Component>
}
