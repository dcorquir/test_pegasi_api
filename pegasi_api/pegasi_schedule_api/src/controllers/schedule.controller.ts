import { Schedule } from './../models/schedule.model';
import { ScheduleService } from './../services/schedule.service';

export class ScheduleController {

    static async findSchedulerByIdentifierRegisterDate(identifier: string, registerDate: string): Promise<Schedule[]> {
        return await ScheduleService.findScheduleByCreatedIdentifier(identifier, registerDate);
    }

}