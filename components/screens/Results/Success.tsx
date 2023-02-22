import cn from 'classnames'
import Link from 'next/link'
import { IoShieldCheckmarkOutline } from 'react-icons/io5'

import Layout from '@/components/common/layout/Layout'

import s from './results.module.scss'

export default function Success() {
	return (
		<Layout
			title='Оплата произведена успешно!'
			description='Страница подтверждающая, что транзакция прошла успешно'
		>
			<div className={s.root}>
				<div className={cn(s.icon, s.success)}>
					<IoShieldCheckmarkOutline />
				</div>
				<div className={s.title}>Оплата произведена успешно!</div>
				<div className={s.text}>Спасибо, что пользуетесь нашими услугами</div>
				<Link
					href='/'
					className={s.home_link}
					role='button'
					aria-label='Go back to Home Page'
				>
					<span>Вернуться на главную страницу</span>
				</Link>
			</div>
		</Layout>
	)
}
