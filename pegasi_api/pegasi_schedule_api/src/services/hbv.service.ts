import { executeRequest } from './../utils/axios';
import { AxiosRequestConfig } from 'axios';
import config from './../config/config';
import { Schedule } from './../models/schedule.model';
import { NotFoundDataError } from './../utils/exceptions/apierror.exception';
import { HbvMapper } from './../utils/mappers/external_resources/hbv.mapper';

export class HbvService {

    static async getExternalResourceById(identifier: string): Promise<Schedule | null> {
        try {
            const options: AxiosRequestConfig = {
                method: 'get',
                baseURL: config.external_services.hbv.HBV_BASE_URL,
                url: `patients/?identifier=${identifier}`
            };
            const result = await executeRequest(options);

            if (result.data && result.data.data.length > 0) {
                return HbvMapper.mapperPatientData(result.data.data[0]);
            }

            return null;
        } catch (error: any) {
            console.error('error', error);
            throw new NotFoundDataError(error.message, error.code);
        }
    }
}