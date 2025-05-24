import { type FaqItem } from '../Faq/types';

export const faqList: FaqItem[] = [
	{
		id: 1,
		question: 'Bagaimana cara mendaftar akun?',
		answer:
			"Klik tombol 'Daftar' di pojok kanan atas, isi formulir, dan verifikasi email Anda.",
	},
	{
		id: 2,
		question: 'Apa metode pembayaran yang tersedia?',
		answer:
			'Kami menerima transfer bank, e-wallet (OVO/Gopay/Dana), dan kartu kredit.',
	},
	{
		id: 3,
		question: 'Berapa lama pengiriman produk?',
		answer:
			'1-3 hari kerja untuk Jabodetabek, 3-7 hari untuk luar Jawa (tergantung kurir).',
	},
	{
		id: 4,
		question: 'Apakah bisa mengembalikan produk?',
		answer:
			'Bisa dalam 14 hari dengan syarat tagihan dan kemasan masih lengkap.',
	},
	{
		id: 5,
		question: 'Bagaimana menghubungi customer service?',
		answer: 'Melalui live chat 24 jam atau email support@example.com',
	},
];
