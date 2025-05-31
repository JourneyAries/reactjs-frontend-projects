"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todoController_1 = require("../controllers/todoController");
const todoRoutes = express_1.default.Router();
todoRoutes.get('/todos', todoController_1.getTodos);
todoRoutes.post('/todos', todoController_1.postTodo);
exports.default = todoRoutes;
