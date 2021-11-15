import { Request, Response } from 'express';
import { truncateSync } from 'fs';
import { CreateEventInput, DeleteEventInput, ReadEventInput, UpdateEventInput } from '../schemas/event.schema';
import { createEvent, deleteEvent, findAndUpdateEvent, findEvent } from '../services/event.service';

export async function createEventHandler(req: Request<{}, {}, CreateEventInput["body"]>,
    response: Response) {

    const userId = response.locals.user._id;

    const body = req.body;

    try {
        const event = await createEvent({ ...body, user: userId });

        return response.send(event);
    }

    catch (e: any) {

    }


}

export async function updateEventHandler(req: Request<{}, {}, UpdateEventInput["params"]>,
    response: Response) {
        const userId = response.locals.user._id;
        const eventId = req.params.eventId;
        
        const update = req.body;
        
        const event = await findEvent({eventId})

        if (!event){
            return response.sendStatus(404);
        }

        if (String(event.user) !== userId){
            return response.sendStatus(403);
        }

        const updatedEvent = await  findAndUpdateEvent({event}, update, {new: true})

        return response.send(updatedEvent)
}

export async function getEventHandler(req: Request<{}, {}, ReadEventInput["params"]>,
    response: Response) {
        const userId = response.locals.user._id;
        const eventId = req.params.eventId;
        const event = await findEvent({eventId})

        if (!event){
            return response.sendStatus(404);
        }
        return response.send(event);
}

export async function deleteEventHandler(req: Request<{}, {}, DeleteEventInput["params"]>,
    response: Response) {
        const userId = response.locals.user._id;
        const eventId = req.params.eventId;
                
        const event = await findEvent({eventId})

        if (!event){
            return response.sendStatus(404);
        }

        if (String(event.user) !== userId){
            return response.sendStatus(403);
        }

        await  deleteEvent({event});

        return response.sendStatus(200);
}