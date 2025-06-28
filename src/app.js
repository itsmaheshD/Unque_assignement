import express from 'express';
import { connectDB } from './utils/db.utils.js';
import loginRoutes from './routes/user.routes.js';
import registerRoutes from './routes/register.route.js';
//import appointmentRoutes from './routes/appointmentRoutes.js';

const app = express();
app.use(express.json());

app.use('/api/login', loginRoutes);
app.use('/api/register', registerRoutes);

connectDB().then(() => {
  app.listen(3000, () => console.log('Server running on port 3000'));
});