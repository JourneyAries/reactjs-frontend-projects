"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const app_1 = __importDefault(require("./app"));
const connectDb_1 = require("./config/connectDb");
dotenv_1.default.config();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || '';
// Hubungkan ke mongoDB dengan URI yang sudah dipersiapkan
(0, connectDb_1.connectDb)(MONGO_URI)
    .then(() => {
    console.info('Connected to MongoDB');
    app_1.default.listen(PORT, () => {
        console.info(`Server run on Port ${PORT}`);
    });
});
