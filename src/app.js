import express from 'express';
import { connectDB } from './utils/db.utils.js';
import authroutes from './routes/user.routes.js';
import available_slot from './routes/slotRegister.route.js';
//import appointmentRoutes from './routes/appointmentRoutes.js';

const app = express();
app.use(express.json());

app.use('/api/auth',authroutes);
app.use('/api/availability',available_slot);
connectDB().then(() => {
  app.listen(3000, () => console.log('Server running on port 3000'));
});