import mongoose, { Schema } from 'mongoose';
import { TodoModel } from '../types';

// Buat Scheme mongoose untuk collection 'todos' dengan field task
const TodoModelSchema: Schema = new Schema({
	text: { type: String, required: true },
	checked: { type: Boolean, default: false },
});

TodoModelSchema.set('toJSON', {
	transform: (_doc, ret) => {
		delete ret.__v;
		return ret;
	},
});

// export model mongoose bernama 'Todos' menggunakan TodoSchema
export default mongoose.model<TodoModel>('Todo', TodoModelSchema);
