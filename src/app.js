import express from 'express';
import authroutes from './routes/user.routes.js';
import available_slot from './routes/slotRegister.route.js';
import book_appointment from './routes/appointment.router.js';

const app = express();
app.use(express.json());

app.use('/api/auth', authroutes);
app.use('/api/availability', available_slot);
app.use('/api/appointment', book_appointment);

export default app;
