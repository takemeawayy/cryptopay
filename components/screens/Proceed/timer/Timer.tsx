import cn from 'classnames'
import { useEffect, useRef, useState } from 'react'

import s from './timer.module.scss'

interface TimerProps {
	isTicking: boolean
}

export default function Timer({ isTicking }: TimerProps) {
	const [minutes, setMinutes] = useState(60)
	const [seconds, setSeconds] = useState(0)
	const tick = useRef()

	useEffect(() => {
		if (isTicking) {
			// @ts-ignore
			tick.current = setInterval(() => {
				setSeconds(val => val - 1)
			}, 1000)
		} else {
			clearInterval(tick.current)
		}

		return () => clearInterval(tick.current)
	}, [isTicking])

	useEffect(() => {
		if (seconds === -1) {
			setMinutes(val => val - 1)
			setSeconds(59)
		}

		if (seconds === 0 && minutes === 0) {
			setMinutes(0)
			setSeconds(0)
			clearInterval(tick.current)
		}
	}, [seconds])

	return (
		<div
			className={cn(s.root, {
				[s.succeed]: !isTicking
			})}
		>
			{isTicking ? (
				<>
					<div className={s.text}>Ожидание оплаты</div>
					<div>
						{minutes >= 10 ? minutes : <>0{minutes}</>}:
						{seconds >= 10 ? seconds : <>0{seconds}</>}
					</div>
				</>
			) : (
				<div className={s.text}>Оплата получена. Подтверждено 0 из 13</div>
			)}
		</div>
	)
}
