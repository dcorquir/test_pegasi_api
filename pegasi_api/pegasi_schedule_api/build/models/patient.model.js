"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatientCreateAPI = void 0;
var class_validator_1 = require("class-validator");
// Validation model which comes to the API.
var PatientCreateAPI = exports.PatientCreateAPI = /** @class */ (function () {
    function PatientCreateAPI() {
    }
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsNotEmpty)({
            message: 'El nombre es requerido',
        })
    ], PatientCreateAPI.prototype, "nombre", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsNotEmpty)({
            message: 'El dni es requerido',
        })
    ], PatientCreateAPI.prototype, "dni", void 0);
    __decorate([
        (0, class_validator_1.IsDateString)()
    ], PatientCreateAPI.prototype, "fechaNacimiento", void 0);
    __decorate([
        (0, class_validator_1.IsDateString)()
    ], PatientCreateAPI.prototype, "fechaFachecimiento", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsNotEmpty)({
            message: 'La cidudadNacimiento es requerido',
        })
    ], PatientCreateAPI.prototype, "cidudadNacimiento", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, class_validator_1.IsNotEmpty)({
            message: 'El campo fallecido es requerido',
        })
    ], PatientCreateAPI.prototype, "fallecido", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsNotEmpty)({
            message: 'El campo direccion es requerido',
        })
    ], PatientCreateAPI.prototype, "direccion", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsNotEmpty)({
            message: 'El campo email es requerido',
        })
    ], PatientCreateAPI.prototype, "email", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, class_validator_1.IsNotEmpty)({
            message: 'El campo casado es requerido',
        })
    ], PatientCreateAPI.prototype, "casado", void 0);
    return PatientCreateAPI;
}());
