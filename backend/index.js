require('dotenv').config();
const express = require('express')

const app = express();
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT} !!`);
});

//  ============================= CONNECT DATABASE MONGODB ================================
const mongoose = require('mongoose');
const MONGO_URL = process.env.MONGO_URL || 'mongodb+srv://manhvu-2k3:manhvu123@cluster-test.yfr5c.mongodb.net/LearnGo';

mongoose.Promise = global.Promise;

async function connectDB() {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("Connected to MongoDB successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

connectDB();