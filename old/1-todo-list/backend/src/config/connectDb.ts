import mongoose from 'mongoose';

export const connectDb = async (uri: string) => {
	try {
		await mongoose.connect(uri);
	} caB connection error', error);
		process.exit(1);
	}
};
