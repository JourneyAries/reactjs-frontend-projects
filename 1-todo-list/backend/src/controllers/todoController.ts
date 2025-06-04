import mongoose from 'mongoose';
import TodoModel from '../models/TodoModel';
import { HttpError } from '../errors/HttpError';
import { sendSuccess } from '../success/HttpSuccess';
import { TodoController } from '../types';

// [GET] /todos
export const getTodos: TodoController = async (req, res, next) => {
	const logPrefix = 'GET /todos/:id -';
	try {
		// cari semua dokument todos di mongodb
		const todos = await TodoModel.find();
		res.json(todos);
		sendSuccess(res, todos, `${logPrefix} Success GET todos`);
	} catch (error) {
		next(new HttpError(500, `${logPrefix} Unexpected server error`));
	}
};

// [POST] /todos
export const postTodo: TodoController = async (req, res, next) => {
	const { text } = req.body;
	const newTodo = new TodoModel({
		text,
	});
	const logPrefix = 'POST /todos/:id -';
	try {
		const savedTodo = await newTodo.save();
		sendSuccess(res, savedTodo, `${logPrefix} Success POST todo`);
	} catch (error) {
		next(new HttpError(500, `${logPrefix} Unexpected server error`));
	}
};

// [DELETE]
export const deleteTodo: TodoController = async (req, res, next) => {
	const { id } = req.params;
	const logPrefix = 'DELETE /todos/:id -';
	try {
		const deletedTodo = await TodoModel.findByIdAndDelete(id);

		if (!deletedTodo)
			return next(new HttpError(404, `${logPrefix} ID not Found`));
		sendSuccess(res, deleteTodo, `${logPrefix} Success DELETE todo`);
	} catch (error) {
		next(new HttpError(500, `${logPrefix} Unexpected server error`));
	}
};

// [PATCH]
export const patchTodo: TodoController = async (req, res, next) => {
	const { id } = req.params;
	const updatedData = req.body;
	const logPrefix = 'PATCH /todos/:id -';
	try {
		if (!mongoose.Types.ObjectId.isValid(id))
			return next(new HttpError(400, `${logPrefix} Invalid ID format`));

		const updatedTodo = await TodoModel.findByIdAndUpdate(id, updatedData, {
			new: true,
			runValidators: true,
		});

		if (!updatedTodo)
			return next(new HttpError(404, `${logPrefix} Todo not found`));

		sendSuccess(res, updatedTodo, `${logPrefix} Success PATCH todo`);
	} catch (error) {
		next(new HttpError(500, `${logPrefix} Unexpected server error`));
	}
};
