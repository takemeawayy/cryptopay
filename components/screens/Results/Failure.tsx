import cn from 'classnames'
import Link from 'next/link'
import { GoIssueClosed } from 'react-icons/go'

import Layout from '@/components/common/layout/Layout'

import s from './results.module.scss'

export default function Failure() {
	return (
		<Layout
			title='Оплата произведена успешно!'
			description='Страница подтверждающая, что транзакция прошла успешно'
		>
			<div className={s.root}>
				<div className={cn(s.icon, s.fail)}>
					<GoIssueClosed />
				</div>
				<div className={s.title}>Оплата не была произведена!</div>
				<div className={s.text}>
					Сожалеем, что там произошло. Попробуйте позже или обратитесь в
					поддержку
				</div>
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
