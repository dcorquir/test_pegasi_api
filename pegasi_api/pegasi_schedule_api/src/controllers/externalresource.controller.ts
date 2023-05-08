import { Schedule } from './../models/schedule.model';
import { StService } from './../services/st.service';

export class ExternalResourceController {

    static async getExternalResourceController(externalResource: string, patient: Schedule) {
        let externalData: Schedule | null = null;
        switch(externalResource) {
            case "ST":
                externalData = await StService.getExternalResourceById(patient.paciente.dni);
                if (externalData) {
                    externalData.fechaInicio = patient.fechaInicio;
                    externalData.fechaFinal = patient.fechaFinal;
                }
                break;
            case "HBV":
                
                break;
            default:
                break;
        }

        return externalData != null ? externalData : patient;
    }

}