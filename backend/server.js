const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const dishRoutes = require('./route/dishRouter.route');

dotenv.config();

const app = express();
app.use(cors());
// Middleware
app.use(express.json());

// Routes
app.use('/api/dishes', dishRoutes);

// Connect to MongoDB and start the server
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

//dummy data inside the db.json file

app.listen(PORT, async() => {
  await mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB', err);
  });
  console.log(`Server running on port ${PORT}`)
});