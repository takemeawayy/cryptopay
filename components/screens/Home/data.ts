export interface IPaymingMethod {
	name: string
	full_name: string
	icon_link: string
	payment_adress: string
	blockchain?: string
	price: number
}

export const payment_methods: IPaymingMethod[] = [
	{
		name: 'ALGO',
		full_name: 'Algorand',
		icon_link: 'algo-logo.png',
		payment_adress: 'n1TugnZ1vX89sBHARjpP1URT3yCHV6V4HMHJSBAJHSDAJHS',
		blockchain: 'ALGORAND',
		price: 0.00223
	},
	{
		name: 'BCH',
		full_name: 'Bitcoin Cash',
		icon_link: 'bch-logo.png',
		payment_adress: 'n1TuqweqwegnZ1vX89sBHARjpP1URT3yCHV6V4HMasddq',
		price: 0.0111
	},
	{
		name: 'BNB',
		full_name: 'Binance Coin',
		icon_link: 'bnb-logo.png',
		payment_adress: 'n1qweTugnZ1vX89sBHARjpP1URT3yCHV6V4HMqjiwjqdow',
		blockchain: 'bsc',
		price: 213
	},
	{
		name: 'BTC',
		full_name: 'Bitcoin',
		icon_link: 'btc-logo.png',
		payment_adress: 'mtqdqwd663CcvLSXAuzfZAaCATqsk9bNYtDXBrt',
		price: 12
	},
	{
		name: 'ETH',
		full_name: 'Ethereum',
		icon_link: 'ethereum-logo.png',
		payment_adress: 'mr2tyhNqwdqVhU9fp39SFv6ajnzdEDiV43PtJW',
		price: 0.0678
	},
	{
		name: 'GALA',
		full_name: 'Gala Games',
		icon_link: 'gala-logo.png',
		payment_adress: 'n4GdzqwdPVehri9JvCjZh66m63rFLmKoDZDKP',
		blockchain: 'ERC-20',
		price: 0.45
	},
	{
		name: 'Magic',
		full_name: 'MAGIC',
		icon_link: 'magic-logo.png',
		payment_adress: 'n3iE2SPqwdkBWsRTLYB6eYM17HWkWNiEwJsAJ',
		blockchain: 'ARBITIUM',
		price: 35.6
	},
	{
		name: 'SOL',
		full_name: 'Solana',
		icon_link: 'sol-logo.png',
		payment_adress: 'mhPV4LxyE4aMqwdwmUiyziYo1p9RELrbK5uX7',
		price: 98
	},
	{
		name: 'TRX',
		full_name: 'Tron',
		icon_link: 'trx-logo.png',
		payment_adress: 'mv15qwdqJLa7wQhgNX3yvj5N7Yxv4RS9Mpr9DH',
		blockchain: 'TRON',
		price: 42
	},
	{
		name: 'USDC',
		full_name: 'USDC',
		icon_link: 'usdc-logo.png',
		payment_adress: 'mnfGLKWz2JrujRczyczWQ1S3Ta66sY9V5x',
		blockchain: 'ERC-20',
		price: 87.56
	}
]
