"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleCreateAPI = void 0;
var class_validator_1 = require("class-validator");
// Validation model which comes to the API.
var ScheduleCreateAPI = exports.ScheduleCreateAPI = /** @class */ (function () {
    function ScheduleCreateAPI() {
    }
    __decorate([
        (0, class_validator_1.ValidateNested)()
    ], ScheduleCreateAPI.prototype, "paciente", void 0);
    __decorate([
        (0, class_validator_1.IsDateString)({}, { each: true })
    ], ScheduleCreateAPI.prototype, "fechaRegistro", void 0);
    __decorate([
        (0, class_validator_1.IsNumber)()
    ], ScheduleCreateAPI.prototype, "fechaInicio", void 0);
    __decorate([
        (0, class_validator_1.IsNumber)()
    ], ScheduleCreateAPI.prototype, "fechaFinal", void 0);
    return ScheduleCreateAPI;
}());
