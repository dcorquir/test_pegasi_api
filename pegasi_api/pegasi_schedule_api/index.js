"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = __importDefault(require("./src/config/server"));
var config_1 = __importDefault(require("./src/config/config"));
var body_parser_1 = __importDefault(require("body-parser"));
var error_handler_exception_1 = __importDefault(require("./src/utils/exceptions/error.handler.exception"));
var apierror_exception_1 = require("./src/utils/exceptions/apierror.exception");
server_1.default.use(body_parser_1.default.json());
server_1.default.use(body_parser_1.default.urlencoded({ extended: true }));
server_1.default.use(function (req, res, next) { return next(new apierror_exception_1.NotFoundError(req.path)); });
server_1.default.use(error_handler_exception_1.default.handle());
var port = config_1.default.port;
server_1.default.listen(port);
console.log("\uD83D\uDE80 Pegasi API start port => ".concat(port));
