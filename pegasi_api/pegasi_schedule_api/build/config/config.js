"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var config = {
    port: process.env.PORT,
    MONGODB_URI: process.env.MONGODB_URI,
    external_services: {
        st: {
            ST_BASE_URL: process.env.ST_BASE_URL
        },
        hbv: {
            HBV_BASE_URL: process.env.HBV_BASE_URL
        }
    }
};
exports.default = config;
