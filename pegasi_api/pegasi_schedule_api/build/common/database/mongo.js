"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var config_1 = __importDefault(require("./../../config/config"));
var MongoDB = /** @class */ (function () {
    function MongoDB() {
        this.connect();
    }
    MongoDB.prototype.connect = function () {
        var mongoUri = config_1.default.MONGODB_URI;
        mongoose_1.default
            .connect(mongoUri)
            .then(function () {
            console.log('🗃️ The connection with MongoDB has been established ✅');
        })
            .catch(function (error) {
            console.error('🚩 Error connecting to MongoDB', error);
        });
    };
    return MongoDB;
}());
exports.default = MongoDB;
