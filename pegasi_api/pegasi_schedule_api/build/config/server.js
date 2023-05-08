"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routes_1 = __importDefault(require("./../routes/routes"));
var mongo_1 = __importDefault(require("../common/database/mongo"));
var App = /** @class */ (function () {
    function App() {
        this.server = (0, express_1.default)();
        this.middleware();
        this.routes();
        this.mongoConnect();
    }
    App.prototype.middleware = function () {
        this.server.use(express_1.default.json());
    };
    App.prototype.routes = function () {
        this.server.use(routes_1.default);
    };
    App.prototype.mongoConnect = function () {
        new mongo_1.default();
    };
    return App;
}());
exports.default = new App().server;
