import { Request, Response, NextFunction } from 'express';
import app from './src/config/server';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import ErrorHandler from './src/utils/exceptions/error.handler.exception';
import { NotFoundError } from './src/utils/exceptions/apierror.exception';

dotenv.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req: Request, res: Response, next: NextFunction) => next(new NotFoundError(req.path)));
app.use(ErrorHandler.handle());

const port = process.env.PORT;
app.listen(port);
console.log(`🚀 Pegasi API start port => ${port}`);