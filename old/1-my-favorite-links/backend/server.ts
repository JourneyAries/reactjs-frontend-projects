import express from 'express'; // Framework untuk buat server
import cors from 'cors'; // Middleware supaya server bisa menerima request dari domain lain (frontend)
import mongoose from 'mongoose'; // Untuk koneksi dan manipulasi database MongoDB
import dotenv from 'dotenv';

// Load isi file .env dan masukkan ke process.env
dotenv.config();

// Buat aplikasi express
const app = express();

// Ambil port dari variabel environment (atau pakai 4000 kalau gak ada)
const PORT = process.env.PORT || 4000;

// Ambil MongoDB URI dari .env
const MONGO_URI = process.env.MONGO_URI || '';

// Gunakan middleware CORS supaya bisa menerima request dari frontend di domain lain
app.use(cors());

// Middleware untuk baca request yang berbentuk JSON
app.use(express.json());

// Koneksi ke MongoDB dengan Mongoose
mongoose
	.connect(MONGO_URI)
	.then(() => console.log('MongoDB connected!'))
	.catch((error) => console.error('MongoDB connection error:', error));

// buat scheme Mongoose untuk struktur data favorite link
// schema = sepeerti blueprint data
const favoriteSchema = new mongoose.Schema({
	title: String,
	link: String,
});

// Buat model dari schema, model ini untuk interaksi dengan collection "favorites" di database
const Favorite = mongoose.model('favorite', favoriteSchema, 'favorites');

// Route GET untuk ambil semua favorite links dari database
app.get('/favorites', async (req, res) => {
	try {
		// Cari semua data di collection favorites
		const favoritesData = await Favorite.find();
		// Kirim data dalam bentuk JSON ke client
		res.json(favoritesData);
	} catch (error) {
		res
			.status(500)
			.json({ error: 'Server error when get data', details: error });
	}
});

// Route Post untuk tambah favorite link baru ke database
app.post('/favorites', async (req, res) => {
	try {
		// Ambil data title dan link dari body request
		const { title, link } = req.body;

		// Buat objek favorite baru berdasarkan schema
		const newFavorite = new Favorite({ title, link });

		// simpan ke database
		await newFavorite.save();
		res.status(201).json(newFavorite);
	} catch (error) {
		res
			.status(500)
			.json({ error: 'Server error saat simpan data', details: error });
	}
});

// Route Delete untuk hapus favorite link berdasarkan id
// app.delete('/favorites/:id', async (req, res) => {
// 	try {
// 		// Ambil id dari parameter URL
// 		const { id } = req.params;
// 		console.log('Delete request received:', req.params.id);

// 		// Hapus data berdasarkan id dari database
// 		await Favorite.findByIdAndDelete(id);

// 		// Kirim respons status 204 (no content) sebagai tanda berhasil hapus
// 		res.status(204).send();
// 	} catch (error) {
// 		res
// 			.status(500)
// 			.json({ error: 'Server error when deleting data', details: error });
// 	}
// });

// Jalankan server di port yang sudah ditentukan
app.listen(PORT, () => {
	console.log(`Server run: http://localhost:${PORT}`);
});
