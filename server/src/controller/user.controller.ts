
import { Request, Response } from 'express';
import { CreateUserInput } from '../schemas/user.schema';
import { createUser } from '../services/user.service';
import logger from '../utils/logger';

export async function createUserHandler(req: Request<{}, {}, CreateUserInput['body']>, res: Response) {

    try {
        const user = await createUser(req.body);
        return res.status(200).send(user);
    } catch (e: any) {
        logger.error(e);
        return res.status(409).send(e.message);

    }
}