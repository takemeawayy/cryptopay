import cn from 'classnames'
import Link from 'next/link'
import { useState } from 'react'

import PaymentConainer from '../common/payment-container/PaymentContainer'
import Title from '../common/title/Title'
import { IPaymingMethod } from '../screens/Home/data'

import Modal from './modal/Modal'
import s from './paymentmethods.module.scss'

interface PaymentProps {
	payments: IPaymingMethod[]
}

export default function PaymentMethods({ payments }: PaymentProps) {
	const [chosenMethod, setChosenMethod] = useState<IPaymingMethod | undefined>(
		undefined
	)

	return (
		<PaymentConainer>
			<Title Component='h1' type='main'>
				Способ оплаты
			</Title>
			<Title className={s.no_margin}>Сумма для выплаты:</Title>
			<div className={s.price}>
				<div className={s.value}>
					{chosenMethod ? chosenMethod.price : <>Не выбрано</>}
				</div>
				{chosenMethod ? (
					<div className={s.prefix}>
						{chosenMethod ? chosenMethod.name : null}
					</div>
				) : null}
			</div>
			<div className={s.section}>
				<Title>Выберите криптовалюту для оплаты:</Title>
				<Modal
					chosenMethod={chosenMethod}
					setChosenMethod={setChosenMethod}
					payments={payments}
				/>
			</div>
			<div className='text-center mt-10 mb-5'>
				<Link
					href={{
						pathname: '/proceed',
						query: { method: chosenMethod ? chosenMethod.name : '' }
					}}
					className={cn(s.payment_link, {
						[s.disabled]: !chosenMethod
					})}
					aria-label='Proceed to checkout'
					role='button'
				>
					Перейти к оплате
				</Link>
			</div>
		</PaymentConainer>
	)
}
