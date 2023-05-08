"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HbvMapper = void 0;
var HbvMapper = /** @class */ (function () {
    function HbvMapper() {
    }
    HbvMapper.mapperPatientData = function (patient) {
        return {
            paciente: {
                nombre: patient.nombre_completo,
                dni: patient.cedula,
                fechaNacimiento: patient.nacimiento,
                fechaFachecimiento: patient.fallecido,
                cidudadNacimiento: patient.ciudad_nacido,
                fallecido: patient.fallecido && patient.fallecido != '' ? true : false,
                direccion: patient.direccion_actual,
                email: patient.correoActual
            }
        };
    };
    return HbvMapper;
}());
exports.HbvMapper = HbvMapper;
