import * as Dialog from '@radix-ui/react-dialog'
import Image from 'next/image'
import { Dispatch, SetStateAction } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { TfiArrowsVertical } from 'react-icons/tfi'

import { IPaymingMethod } from '@/components/screens/Home/data'

import PaymentItem from '../method-item/PaymentItem'

import s from './modal.module.scss'

interface ModalProps {
	chosenMethod: IPaymingMethod | undefined
	setChosenMethod: Dispatch<SetStateAction<IPaymingMethod | undefined>>
	payments: IPaymingMethod[]
}

export default function Modal({
	chosenMethod,
	setChosenMethod,
	payments
}: ModalProps) {
	return (
		<Dialog.Root>
			<Dialog.Trigger asChild>
				<div className={s.trigger}>
					{chosenMethod ? (
						<div className={s.chosen_method}>
							<div className={s.info}>
								<div className={s.method_logo}>
									<Image
										src={`/crypto/${chosenMethod.icon_link}`}
										width={30}
										height={30}
										priority
										alt={chosenMethod.name}
									/>
								</div>
								<div className={s.method_name}>{chosenMethod.name}</div>
								{chosenMethod.blockchain ? (
									<div className={s.method_blockchain}>
										{chosenMethod.blockchain}
									</div>
								) : null}
							</div>
							<span>
								<TfiArrowsVertical size={24} />
							</span>
						</div>
					) : (
						<div className={s.not_chosen}>
							<div>Криптовалюта</div>
							<span>
								<TfiArrowsVertical size={24} />
							</span>
						</div>
					)}
				</div>
			</Dialog.Trigger>
			<Dialog.Portal>
				<Dialog.Overlay className={s.overlay} />
				<Dialog.Content className={s.content}>
					<Dialog.Title className={s.title}>
						Выберите способ оплаты
					</Dialog.Title>

					<div className={s.crypto_list}>
						{payments.map(method => (
							<PaymentItem
								item={method}
								key={method.name}
								chosenMethod={chosenMethod}
								setChosenMethod={setChosenMethod}
							/>
						))}
					</div>
					<Dialog.Close asChild>
						<button className={s.dialog_close}>
							<AiOutlineClose size={24} />
						</button>
					</Dialog.Close>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	)
}
