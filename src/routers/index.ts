import Users from './users';
import express from 'express';

const app = express();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use(Users);

export default app;