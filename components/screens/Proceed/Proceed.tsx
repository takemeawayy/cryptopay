import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import Layout from '@/components/common/layout/Layout'
import PaymentConainer from '@/components/common/payment-container/PaymentContainer'

import { IPaymingMethod, payment_methods } from '../Home/data'

import Checkout from './checkout/Checkout'
import Loader from './loader/Loader'
import s from './proceed.module.scss'

export default function Proceed() {
	const [chosenMethod, setChosenMethod] = useState<IPaymingMethod | undefined>()
	const [isTicking, setIsTicking] = useState(true)
	const [loading, setLoading] = useState(true)

	const { query, isReady } = useRouter()
	const { method } = query

	useEffect(() => {
		if (isReady) {
			const item = payment_methods.find(item => item.name === method)

			if (item) {
				setChosenMethod(item)
				setLoading(false)
			} else {
				setChosenMethod(undefined)
				setLoading(false)
			}
		}
	}, [isReady])

	return (
		<Layout
			title='Совершение оплаты'
			description='Cтраница на которой совершается конечная оплата'
		>
			<PaymentConainer>
				{loading ? (
					<Loader />
				) : chosenMethod ? (
					<Checkout
						isTicking={isTicking}
						setIsTicking={setIsTicking}
						chosenMethod={chosenMethod}
					/>
				) : (
					<div className={s.nothing_found}>Упс, ничего не найдено</div>
				)}
			</PaymentConainer>
		</Layout>
	)
}
