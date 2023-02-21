import Image from 'next/image'
import Link from 'next/link'
import { useRef, useState } from 'react'
import toast from 'react-hot-toast'
import { AiOutlineClose, AiOutlineCopy } from 'react-icons/ai'

import Title from '../common/title/Title'
import { IPaymingMethod } from '../screens/Home/Home'
import { payment_methods } from '../screens/Home/data'

import PaymentItem from './method-item/PaymentItem'
import s from './payment.module.scss'

interface PaymentProps {
	payemnts: IPaymingMethod[]
}

export default function Payment({ payemnts }: PaymentProps) {
	const adressRef = useRef<HTMLDivElement>(null)
	const paymentContaineRef = useRef<HTMLDivElement>(null)
	const [chosenMethod, setChosenMethod] = useState(payment_methods[0])

	const copyToClipboard = () => {
		if (adressRef.current !== null && paymentContaineRef.current !== null) {
			navigator.clipboard.writeText(adressRef.current.innerText)
			toast.success('Скопировано в буфер обмена!')
		} else {
			return
		}
	}

	return (
		<div className={s.root}>
			<div className={s.content}>
				<div className={s.top}>
					<Link href='/'>
						<Image
							src='/zelenka_short.svg'
							width={57.5}
							height={50}
							priority
							alt='Zelenka Logo'
						/>
					</Link>
					<div className={s.close_icon}>
						<AiOutlineClose size={28} />
					</div>
				</div>
				<Title Component='h1' className={s.main_title}>
					Оплата
				</Title>
				<Title className={s.no_margin}>Сумма для выплаты:</Title>
				<div className={s.price}>
					<div className={s.value}>{chosenMethod.price}</div>
					<div className={s.prefix}>{chosenMethod.name}</div>
				</div>
				<div className={s.section}>
					<Title>Выберите криптовалюту для оплаты:</Title>
					<div className={s.crypto_list}>
						{payemnts.map(method => (
							<PaymentItem
								item={method}
								key={method.name}
								chosenMethod={chosenMethod}
								setChosenMethod={setChosenMethod}
							/>
						))}
					</div>
				</div>
				<div>
					<Title>Адрес для оплаты:</Title>
					<div className={s.adress_container} ref={paymentContaineRef}>
						<div ref={adressRef} className={s.adress}>
							{chosenMethod.payment_adress}
						</div>
						<button onClick={copyToClipboard} className={s.copy_button}>
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
		</div>
	)
}
