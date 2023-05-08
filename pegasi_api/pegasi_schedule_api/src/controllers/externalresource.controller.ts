import { Schedule } from './../models/schedule.model';
import { StService } from './../services/st.service';
import { HbvService } from './../services/hbv.service';
export class ExternalResourceController {

    static async getExternalResourceController(externalResource: string, patient: Schedule) {
        let externalData: Schedule | null = null;
        switch(externalResource) {
            case "ST":
                externalData = await StService.getExternalResourceById(patient.paciente.dni);
                break;
            case "HBV":
                externalData = await HbvService.getExternalResourceById(patient.paciente.dni);
                break;
            default:
                break;
        }

        if (externalData) {
            externalData.fechaRegistro = patient.fechaRegistro;
            externalData.fechaInicio = patient.fechaInicio;
            externalData.fechaFinal = patient.fechaFinal;
        }

        return externalData != null ? externalData : patient;
    }

}