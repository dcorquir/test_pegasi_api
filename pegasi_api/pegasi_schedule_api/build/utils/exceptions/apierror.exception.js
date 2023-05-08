"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundDataError = exports.BadRequestError = exports.NotFoundError = exports.ApiError = void 0;
var http_status_codes_1 = require("http-status-codes");
var ApiError = /** @class */ (function (_super) {
    __extends(ApiError, _super);
    function ApiError(statusCode, message, rawErrors) {
        var _this = _super.call(this, message) || this;
        _this.rawErrors = [];
        _this.statusCode = statusCode;
        if (rawErrors)
            _this.rawErrors = rawErrors;
        Error.captureStackTrace(_this, _this.constructor);
        return _this;
    }
    return ApiError;
}(Error));
exports.ApiError = ApiError;
var NotFoundError = /** @class */ (function (_super) {
    __extends(NotFoundError, _super);
    function NotFoundError(path) {
        return _super.call(this, http_status_codes_1.StatusCodes.NOT_FOUND, "The requested path ".concat(path, " not found!")) || this;
    }
    return NotFoundError;
}(ApiError));
exports.NotFoundError = NotFoundError;
var BadRequestError = /** @class */ (function (_super) {
    __extends(BadRequestError, _super);
    function BadRequestError(message, errors) {
        return _super.call(this, http_status_codes_1.StatusCodes.BAD_REQUEST, message, errors) || this;
    }
    return BadRequestError;
}(ApiError));
exports.BadRequestError = BadRequestError;
var NotFoundDataError = /** @class */ (function (_super) {
    __extends(NotFoundDataError, _super);
    function NotFoundDataError(message, errors) {
        return _super.call(this, http_status_codes_1.StatusCodes.NOT_FOUND, message, errors) || this;
    }
    return NotFoundDataError;
}(ApiError));
exports.NotFoundDataError = NotFoundDataError;
