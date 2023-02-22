import Image from 'next/image'
import { Dispatch, SetStateAction, useRef } from 'react'
import { toast } from 'react-hot-toast'
import { AiOutlineCopy } from 'react-icons/ai'

import Title from '@/components/common/title/Title'

import { IPaymingMethod } from '../../Home/data'
import Timer from '../timer/Timer'

import s from './checkout.module.scss'

interface CheckoutProps {
	isTicking: boolean
	chosenMethod: IPaymingMethod
	setIsTicking: Dispatch<SetStateAction<boolean>>
}

export default function Checkout({
	isTicking,
	chosenMethod,
	setIsTicking
}: CheckoutProps) {
	const adressRef = useRef<HTMLDivElement>(null)

	const copyToClipboard = () => {
		if (adressRef.current !== null) {
			navigator.clipboard.writeText(adressRef.current.innerText)
			toast.success('Скопировано в буфер обмена!')
		} else {
			return
		}
	}

	return (
		<div>
			<Title Component='h1' type='main'>
				Оплата
			</Title>
			<Title className={s.no_margin}>Сумма для выплаты:</Title>
			<div className={s.price}>
				<div className={s.value}>{chosenMethod.price}</div>
				<div className={s.prefix}>{chosenMethod.name}</div>
			</div>
			<Timer isTicking={isTicking} />
			<button onClick={() => setIsTicking(false)} aria-label='Process payment'>
				Получить оплату
			</button>
			<div className={s.section}>
				<Title>Адрес для оплаты:</Title>
				<div className={s.adress_container}>
					<div ref={adressRef} className={s.adress}>
						{chosenMethod.payment_adress}
					</div>
					<button
						onClick={copyToClipboard}
						className={s.copy_button}
						aria-label='Copy adress'
					>
						<AiOutlineCopy size={24} />
					</button>
				</div>
				<div className={s.qr_container}>
					<div className={s.qrcode}>
						<Image
							src='/qrcode.png'
							alt='QR code for payment'
							fill
							sizes='(max-width: 768px) 100vw,
								(max-width: 1200px) 50vw,
								33vw'
						/>
					</div>
				</div>
			</div>
		</div>
	)
}
