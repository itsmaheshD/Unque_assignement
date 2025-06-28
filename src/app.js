require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes/user.routes.js');
const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors({
  origin: 'http://localhost:5173/auth/login',
  credentials: true  // only needed if using cookies or Authorization headers
}));
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use('/api', routes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});