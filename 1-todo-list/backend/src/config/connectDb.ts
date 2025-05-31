import mongoose from 'mongoose';

export const connectDb = async (uri: string) => {
	try {
		await mongoose.connect(uri);
	} catch (error) {
		console.error('MongoDB connection error', error);
		process.exit(1);
	}
};
