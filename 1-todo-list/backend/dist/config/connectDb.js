"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDb = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const connectDb = async (uri) => {
    try {
        await mongoose_1.default.connect(uri);
    }
    catch (error) {
        console.error('MongoDB connection error', error);
        process.exit(1);
    }
};
exports.connectDb = connectDb;
