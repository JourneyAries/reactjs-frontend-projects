import express from 'express';
import {
	getTodos,
	postTodo,
	deleteTodo,
	patchTodo,
} from '../controllers/todoController';

const todoRoutes = express.Router();

todoRoutes.get('/todos', getTodos);
todoRoutes.post('/todos', postTodo);
todoRoutes.delete('/todos/:id', deleteTodo);
todoRoutes.patch('/todos/:id', patchTodo);

export default todoRoutes;
