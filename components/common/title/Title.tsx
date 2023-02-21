import cn from 'classnames'
import { JSXElementConstructor, PropsWithChildren } from 'react'

import s from './title.module.scss'

interface TitleProps {
	Component?: string | JSXElementConstructor<any>
	className?: string
}

export default function Title({
	children,
	Component = 'div',
	className
}: PropsWithChildren<TitleProps>) {
	const rootClassname = cn(s.root, {}, className)

	return <Component className={rootClassname}>{children}</Component>
}
