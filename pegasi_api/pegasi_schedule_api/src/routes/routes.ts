import { Router, Request, Response, } from 'express';
import RequestValidator from './../common/request.validator';
import { ScheduleCreateAPI } from './../models/schedule.model';
import { ExternalResourceController } from './../controllers/externalresource.controller';
import { ScheduleController } from './../controllers/schedule.controller';
import { ScheduleService } from './../services/schedule.service';
import { Schedule } from './../models/schedule.model';

const routes = Router();

routes.get('/', async (req: Request, res: Response) => {

    let dataResp: Schedule[] = [];

    const {identifier, registerDate} = req.query;

    console.log('registerDate', registerDate);
    console.log('identifier', identifier);
    
    dataResp = await ScheduleController.findSchedulerByIdentifierRegisterDate(identifier as string, registerDate as string);

    res.status(200).send({
        message: "Datos encontrados",
        data: dataResp
    });
});

routes.post('/', RequestValidator.validate(ScheduleCreateAPI), async (req: Request, res: Response) => {
    const externalResource = req.body.externalResource;
    let dataInsert = req.body;
    if (externalResource && externalResource != '') {
        dataInsert = await ExternalResourceController.getExternalResourceController(externalResource, req.body);
    }

    await ScheduleService.createSchedule(dataInsert);

    res.status(200).send({
        message: "La agenda se ha creado correctamente",
    });
});

export default routes;