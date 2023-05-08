import { Schedule } from './../models/schedule.model';
import { BadRequestError } from './../utils/exceptions/apierror.exception';
const moment = require('moment');
const ScheduleRep = require('./../repositories/schedule.repository');

export class ScheduleService {

    static async createSchedule(dataInsert: Schedule): Promise<Schedule> {
        try {
            const sch = new ScheduleRep(dataInsert);
            return await sch.save();

        } catch (error: any) {
            throw new BadRequestError(error.message, error.code);
        }
    }

    static async findScheduleByCreatedIdentifier(identifier: string, registerDate: string): Promise<Schedule[]> {
        try {
            const query: any = {};
            if (registerDate && registerDate != '') {
                query['fechaRegistro'] = {
                    "$gte": moment(registerDate, 'YYYY-MM-DD').startOf('day').toDate(),
                    "$lte": moment(registerDate, 'YYYY-MM-DD').endOf('day').toDate()
                }
            }
            if (identifier && identifier != '') {
                query['paciente.dni'] = identifier
            }
            return await ScheduleRep.find(query);
        } catch (error: any) {
            throw new BadRequestError(error.message, error.code);
        }
    }

}