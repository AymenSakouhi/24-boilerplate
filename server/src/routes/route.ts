import express from 'express';
import { getAllUsers, createOneUser } from '../controllers/controllers';

const route = express.Router();

route.get('/users', getAllUsers);
route.post('/create/user', createOneUser);

export default route;
