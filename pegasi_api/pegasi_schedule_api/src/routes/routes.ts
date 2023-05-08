import { Router, Request, Response, } from 'express';
import RequestValidator from './../common/request.validator';
import { ScheduleCreateAPI } from './../models/schedule.model';

const routes = Router();

routes.get('/', (req: Request, res: Response) => {
    return res.json({ message: 'Hello World' });
});

routes.post('/', RequestValidator.validate(ScheduleCreateAPI), (req: Request, res: Response) => {
    console.log(req.body);
    const externalResource = req.body.externalResource;
    if (externalResource && externalResource != '') {
        
    }
    res.status(200).send({
        message: "La agenda se ha creado correctamente",
    });
});

export default routes;