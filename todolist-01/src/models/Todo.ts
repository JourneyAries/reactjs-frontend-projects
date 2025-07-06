import { model, models, Schema } from 'mongoose';

const TodoSchema = new Schema({
  task: { type: String, required: true },
  checked: { type: Boolean, default: false },
});

export const Todo = models.Todo || model('Todo', TodoSchema);
