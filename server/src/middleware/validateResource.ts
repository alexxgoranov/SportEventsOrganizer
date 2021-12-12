import { Request, Response, NextFunction } from 'express';
import {AnyZodObject} from 'zod';

const validate = (schema: AnyZodObject) => 
    (req: Request, response: Response, next: NextFunction) => {
    try {
        console.log('In middleware 1')
        // console.log(schema);
        schema.parse({
            body: req.body,
            query: req.query,
            params: req.params
        });
       return next();
        // console.log('You are still in middleware 1');
    }
    catch (e: any) {
        return response.status(400).send(e.errors);

    }
}

export default validate