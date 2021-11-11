
import {Express, Request, Response} from 'express';
import { createUserHandler } from './controller/user.controller';

import validateResource from './middleware/validateResource';
import { createUserSchema } from './schemas/user.schema';

function routes(app: Express) {
    app.get('/apiTestCall', (req: Request, response: Response) => {
        response.sendStatus(200);
    } );

    app.post('/createNewUser', validateResource(createUserSchema), createUserHandler);
}

export default routes;