import { Schedule } from './../../../models/schedule.model';
import { HbvPatient } from './../../../models/dtos/external/hbv.response.dto';

export class HbvMapper {

    static mapperPatientData(patient: HbvPatient): Schedule {
        return {
            paciente: {
                nombre: patient.nombre_completo,
                dni: patient.cedula,
                fechaNacimiento: patient.nacimiento,
                fechaFachecimiento: patient.fallecido,
                cidudadNacimiento: patient.ciudad_nacido,
                fallecido: patient.fallecido,
                direccion: patient.direccion_actual,
                email: patient.correoActual
            },
            fechaRegistro: patient.a_t
        };
    }

}