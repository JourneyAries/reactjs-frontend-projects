import mongoose, {Schema, Document} from "mongoose";

export type Todo = Document & {
  todo: string;
  checked: boolean
}

const todoSchema = new Schema({
  todo: {type: String, required: true},
  checked: {type: Boolean, default: false}
})

export default mongoose.models.Todo || mongoose.model<Todo>('Todo', todoSchema);
