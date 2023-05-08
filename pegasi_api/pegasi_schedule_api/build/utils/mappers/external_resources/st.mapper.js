"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StMapper = void 0;
var StMapper = /** @class */ (function () {
    function StMapper() {
    }
    StMapper.mapperPatientData = function (patient) {
        return {
            paciente: {
                nombre: patient.name,
                dni: patient.identifier,
                fechaNacimiento: patient.birthDate,
                fechaFachecimiento: patient.deceasedBirth,
                cidudadNacimiento: patient.birthCity,
                fallecido: patient.isDeceased && patient.isDeceased != '' ? true : false,
                direccion: patient.address,
                email: patient.email,
                casado: patient.married
            }
        };
    };
    return StMapper;
}());
exports.StMapper = StMapper;
