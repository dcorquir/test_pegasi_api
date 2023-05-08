import { Schedule } from './../models/schedule.model';

export class ExternalResourceController {

    static async getExternalResourceController(externalResource: string, patient: Schedule) {
        switch(externalResource) {
            case "HBV":
                break;
            case "ST":
                break;
            default:
                break;
        }
    }

}