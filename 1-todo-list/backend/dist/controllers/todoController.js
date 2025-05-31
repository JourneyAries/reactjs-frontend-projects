"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postTodo = exports.getTodos = void 0;
const TodoModel_1 = __importDefault(require("../models/TodoModel"));
// [GET] /todos
const getTodos = async (req, res) => {
    try {
        // cari semua dokument todos di mongodb
        const todos = await TodoModel_1.default.find();
        res.json(todos);
    }
    catch (error) {
        res
            .status(500)
            .json({ message: 'Server Error when GET /todos', details: error });
    }
};
exports.getTodos = getTodos;
// [POST] /todos
const postTodo = async (req, res) => {
    try {
        const { title } = req.body;
        const newTodo = new TodoModel_1.default({
            title,
            completed: false,
        });
        const savedTodo = await newTodo.save();
        res.status(201).json(savedTodo);
    }
    catch (error) {
        res.status(500).json({ message: 'Error POST', details: error });
    }
};
exports.postTodo = postTodo;
