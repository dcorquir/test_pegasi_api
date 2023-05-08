import { Router, Request, Response, } from 'express';
import RequestValidator from './../common/request.validator';
import { ScheduleCreateAPI } from './../models/schedule.model';
import { ExternalResourceController } from './../controllers/externalresource.controller';
import { ScheduleService } from './../services/schedule.service';

const routes = Router();

routes.get('/', (req: Request, res: Response) => {
    return res.json({ message: 'Hello World' });
});

routes.post('/', RequestValidator.validate(ScheduleCreateAPI), async (req: Request, res: Response) => {
    console.log(req.body);
    const externalResource = req.body.externalResource;
    let dataInsert = req.body;
    console.log('externalResource', externalResource);
    if (externalResource && externalResource != '') {
        dataInsert = await ExternalResourceController.getExternalResourceController(externalResource, req.body);
    }

    await ScheduleService.createSchedule(dataInsert);

    res.status(200).send({
        message: "La agenda se ha creado correctamente",
    });
});

export default routes;