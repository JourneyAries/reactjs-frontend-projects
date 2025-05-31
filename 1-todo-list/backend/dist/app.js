"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const todoRoutes_1 = __importDefault(require("./routes/todoRoutes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)()); // cross-origin resource sharing
app.use(express_1.default.json());
// Pasang router todoRoutes di endpoint / root
app.use('/', todoRoutes_1.default);
exports.default = app;
