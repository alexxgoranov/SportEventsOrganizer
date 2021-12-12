
import {Express, Request, Response} from 'express';

function routes(app: Express) {
    console.log('here');
    // console.log(app);
    app.post('/api/v1/sign-up', (req: Request, response: Response) => {
        console.log(req);
        response.sendStatus(200).send("Yes it worksss");
    } );
}

export default routes;