import Link from 'next/link'
import { BsDiscord, BsTelegram } from 'react-icons/bs'

import Layout from '@/components/common/layout/Layout'
import Payment from '@/components/payment-container/Payment'

import { payment_methods } from './data'
import s from './home.module.scss'

export interface IPaymingMethod {
	name: string
	full_name: string
	icon_link: string
	payment_adress: string
	blockchain?: string
	price: number
}

export default function Home() {
	return (
		<Layout
			title='Оплата с помощью криптовалюты'
			description='Здесь вы сможете удобно оплатить вашу покупку различными способами'
		>
			<Payment payemnts={payment_methods} />
			<div className={s.contact}>
				Если у вас появились какие то трудности, пишите нам
				<div className={s.socials}>
					<Link href='/test' aria-label='Contact us in Telegram'>
						<BsTelegram size={30} className={s.soc_icon} />
					</Link>
					<Link href='/test' aria-label='Contact us in Discord'>
						<BsDiscord size={30} className={s.soc_icon} />
					</Link>
				</div>
			</div>
		</Layout>
	)
}
