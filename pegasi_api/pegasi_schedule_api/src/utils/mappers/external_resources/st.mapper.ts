import { Schedule } from './../../../models/schedule.model';
import { StPatient } from './../../../models/dtos/external/st.response.dto';

export class StMapper {

    static mapperPatientData(patient: StPatient): Schedule {
        return {
            paciente: {
                nombre: patient.name,
                dni: patient.identifier,
                fechaNacimiento: patient.birthDate,
                fechaFachecimiento: patient.deceasedBirth,
                cidudadNacimiento: patient.birthCity,
                fallecido: patient.isDeceased,
                direccion: patient.address,
                email: patient.email,
                casado: patient.married
            },
            fechaRegistro: patient.createdAt
        };
    }

}