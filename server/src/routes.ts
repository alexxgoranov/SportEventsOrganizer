
import {Express, Request, Response} from 'express';
import { createSessionHandler, deleteSessionHandler, getUserSessionHandler } from './controller/session.controller';
import { createUserHandler } from './controller/user.controller';

import validateResource from './middleware/validateResource';
import { createSessionSchema } from './schemas/session.schema';
import { createUserSchema } from './schemas/user.schema';
import requireUser from './middleware/requireUser';
import { createEventSchema, deleteEventSchema, getEventSchema, updateEventSchema } from './schemas/event.schema';
import { createEventHandler, deleteEventHandler, getEventHandler, updateEventHandler } from './controller/event.controller';

function routes(app: Express) {
    app.get('/apiTestCall', (req: Request, response: Response) => {
        response.sendStatus(200);
    } );

    app.post('/api/users', validateResource(createUserSchema), createUserHandler);

    app.post('/api/sessions', validateResource(createSessionSchema), createSessionHandler);
    app.get('/api/sessions', validateResource(createSessionSchema), requireUser, getUserSessionHandler);
    app.delete('/api/sessions', validateResource(createSessionSchema), requireUser, deleteSessionHandler);

    app.post('api/events', [requireUser, validateResource(createEventSchema)], createEventHandler);
    app.put('api/events/:productId', [requireUser, validateResource(updateEventSchema)], updateEventHandler);
    app.get('api/events/:productId', validateResource(getEventSchema), getEventHandler);
    app.delete('api/events/:productId', [requireUser,validateResource(deleteEventSchema)], deleteEventHandler);

}

export default routes;