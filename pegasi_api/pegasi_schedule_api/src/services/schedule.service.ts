import { Schedule } from './../models/schedule.model';
import { BadRequestError } from './../utils/exceptions/apierror.exception';
const ScheduleRep = require('./../repositories/schedule.repository');

export class ScheduleService {

    static async createSchedule(dataInsert: Schedule): Promise<Schedule> {
        try {
            console.log('dataInsert', dataInsert);

            const sch = new ScheduleRep(dataInsert);
            return await sch.save();

        } catch (error: any) {
            throw new BadRequestError(error.message, error.code);
        }
    }

}