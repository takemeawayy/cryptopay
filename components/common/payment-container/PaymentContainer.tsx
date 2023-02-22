import Image from 'next/image'
import Link from 'next/link'
import { PropsWithChildren } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { BsDiscord, BsTelegram } from 'react-icons/bs'

import s from './paymentcontainer.module.scss'

export default function PaymentConainer({
	children
}: PropsWithChildren<unknown>) {
	return (
		<>
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
					{children}
				</div>
			</div>
			<div className={s.contact}>
				Если у вас появились какие то трудности, пишите нам
				<div className={s.socials}>
					<a
						href='/test'
						target='_blank'
						rel='noopener noreferrer'
						aria-label='Contact us in Telegram'
					>
						<BsTelegram size={30} className={s.soc_icon} />
					</a>
					<a
						href='/test'
						target='_blank'
						rel='noopener noreferrer'
						aria-label='Contact us in Discord'
					>
						<BsDiscord size={30} className={s.soc_icon} />
					</a>
				</div>
			</div>
		</>
	)
}
