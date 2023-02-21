import cn from 'classnames'
import Image from 'next/image'
import { Dispatch, SetStateAction } from 'react'

import { IPaymingMethod } from '@/components/screens/Home/Home'

import s from './paymentitem.module.scss'

interface MethodProps {
	item: IPaymingMethod
	chosenMethod: IPaymingMethod
	setChosenMethod: Dispatch<SetStateAction<IPaymingMethod>>
}

export default function PaymentItem({
	item,
	chosenMethod,
	setChosenMethod
}: MethodProps) {
	const handleClick = () => {
		setChosenMethod(item)
	}

	return (
		<div
			className={cn(s.root, {
				[s.active]: item === chosenMethod
			})}
			draggable={false}
			onClick={handleClick}
		>
			<div className={cn(s.half, s.main)}>
				<div className={s.icon}>
					<Image
						src={`/crypto/${item.icon_link}`}
						width={30}
						height={30}
						alt={item.full_name}
						quality={100}
					/>
				</div>
				<div className={s.name}>{item.name}</div>
				{item.blockchain && (
					<div className={s.blockchain}>{item.blockchain}</div>
				)}
			</div>
			<div className={s.half}>
				<div className={s.full_name}>{item.full_name}</div>
			</div>
		</div>
	)
}
