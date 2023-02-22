import Layout from '@/components/common/layout/Layout'
import PaymentMethods from '@/components/payment-methods/PaymentMethods'

import { payment_methods } from './data'

export default function Home() {
	return (
		<Layout
			title='Выбор оплаты'
			description='Здесь вы сможете удобно выбрать нужную вам криптовалюту для оплаты'
		>
			<PaymentMethods payments={payment_methods} />
		</Layout>
	)
}
