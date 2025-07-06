//Entry point of the application
import dotenv from 'dotenv';
dotenv.config(); // must be before using process.env

import app from './app.js';
import { connectDB } from './utils/db.utils.js';


const PORT = process.env.PORT || 3000;
//console.log(process.env.PORT,"Port");

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}).catch((err) => {
  console.error('Failed to connect to DB:', err);
});
