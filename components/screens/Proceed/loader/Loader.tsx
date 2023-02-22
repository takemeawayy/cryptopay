import { AiOutlineLoading3Quarters } from 'react-icons/ai'

import s from './loader.module.scss'

export default function Loader() {
	return (
		<div className={s.root}>
			<span className={s.icon}>
				<AiOutlineLoading3Quarters size={30} />
			</span>
		</div>
	)
}
