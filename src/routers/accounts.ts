import Router from 'express';
import { CreateAccount } from '../controllers/create-account';

const route = Router();

route.route('/account')
.post(new CreateAccount().handle.bind(new CreateAccount()));

export default route;