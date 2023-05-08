"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1.default.Schema;
var ScheduleSchema = new Schema({
    paciente: {
        nombre: { type: String },
        dni: { type: String },
        fechaNacimiento: { type: String },
        fechaFachecimiento: { type: String },
        cidudadNacimiento: { type: String },
        fallecido: { type: Boolean },
        direccion: { type: String },
        email: { type: String },
        casado: { type: Boolean },
    },
    fechaRegistro: { type: Date },
    fechaInicio: { type: Number },
    fechaFinal: { type: Number }
});
module.exports = mongoose_1.default.model("ScheduleSchema", ScheduleSchema);
