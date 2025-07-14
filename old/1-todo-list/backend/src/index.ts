import dotenv from 'dotenv';
import app from './app';
import {connectDb} from "./config/connectDb";

dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || '';

// Hubungkan ke mongoDB dengan URI yang sudah dipersiapkan
connectDb(MONGO_URI)
	.then(() => {
		console.info('Connected to MongoDB');
		app.listen(PORT, () => {
			console.info(`Server run on Port ${PORT}`);
		});
	})
