import express from 'express';
import routes from './routers';

const app = express();
app.use(routes);

export { app };