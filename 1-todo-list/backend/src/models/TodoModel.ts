import mongoose, { Schema, Document } from 'mongoose';

export type TodoModel = Document & {
	title: string;
	completed: boolean;
};

// Buat Scheme mongoose untuk collection 'todos' dengan field task
const TodoModelSchema: Schema = new Schema({
	title: { type: String, required: true },
	completed: { type: Boolean, default: false },
});

TodoModelSchema.set('toJSON', {
	transform: (_doc, ret) => {
		delete ret.__v;
		return ret;
	},
});

// export model mongoose bernama 'Todos' menggunakan TodoSchema
export default mongoose.model<TodoModel>('Todo', TodoModelSchema);
