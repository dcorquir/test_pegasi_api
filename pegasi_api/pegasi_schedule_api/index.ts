import { Request, Response, NextFunction } from 'express';
import app from './src/config/server';
import config from './src/config/config';
import bodyParser from 'body-parser';
import ErrorHandler from './src/utils/exceptions/error.handler.exception';
import { NotFoundError } from './src/utils/exceptions/apierror.exception';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req: Request, res: Response, next: NextFunction) => next(new NotFoundError(req.path)));
app.use(ErrorHandler.handle());

const port = config.port;
app.listen(port);
console.log(`🚀 Pegasi API start port => ${port}`);