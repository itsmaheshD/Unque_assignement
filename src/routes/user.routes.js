import express from 'express';
import { login } from '../controllers/login.controller(authcontroller).js';
import { register } from '../controllers/user.controllers.js';
const router = express.Router();

//Endpoints for user authentication
router.post('/login', login);
router.post('/register', register);

export default router;