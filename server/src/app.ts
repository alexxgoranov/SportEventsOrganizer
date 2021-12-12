
import config from 'config';
import express from 'express';
import connect from './utils/connect';
import logger from './utils/logger';
import routes from './routes';
import deserializeUser from './middleware/deserializeUser';
import authRoutes from './routes/auth.routes';
import cors from 'cors';


const port = config.get<number>('port');
const app = express();

app.use(express.json());
app.use(deserializeUser);

const corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200,
    credentials: true
  };
app.use(cors(corsOptions));



// app.use('/api/v1/auth' , authRoutes);


app.listen(port, async () => {
    logger.info(`App is running at http://localhost:${port}`);
    await connect();
    routes(app);
})