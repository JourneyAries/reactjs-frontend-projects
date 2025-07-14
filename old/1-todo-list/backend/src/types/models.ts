import { Document } from 'mongoose';

export type TodoModel = Document & {
	title: string;
	completed: boolean;
};
