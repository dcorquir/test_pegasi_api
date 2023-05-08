import { executeRequest } from './../utils/axios';
import { AxiosRequestConfig } from 'axios';
import config from './../config/config';
import { Schedule } from './../models/schedule.model';
import { NotFoundDataError } from './../utils/exceptions/apierror.exception';
import { StMapper } from './../utils/mappers/external_resources/st.mapper';

export class StService {

    static async getExternalResourceById(identifier: string): Promise<Schedule | null> {
        try {
            const options: AxiosRequestConfig = {
                method: 'get',
                baseURL: config.external_services.st.ST_BASE_URL,
                url: `patients/?identifier=${identifier}`
            };
            const result = await executeRequest(options);

            if (result.data && result.data.length > 0) {
                return StMapper.mapperPatientData(result.data[0]);
            }

            return null;
        } catch (error: any) {
            throw new NotFoundDataError(error.message, error.code);
        }
    }

}