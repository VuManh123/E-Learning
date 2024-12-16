require('dotenv').config();
const express = require('express');
// import third-party
const cookieParser = require('cookie-parser');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const https = require('https');

// import local file
const { MAX } = require('./constant');
const corsConfig = require('./configs/Cors');
const accountApi = require('./routes/AccountRoute');
const wordApi = require('./routes/WordRoutes');
// const gameApi = require('./src/apis/game.api');
const flashcardApi = require('./routes/FlashCardRoute');
const commonApi = require('./routes/CommonRoute');
// const sentenceApi = require('./src/apis/sentence.api');
// const blogApi = require('./src/apis/blog.api');
// const highscoreApi = require('./src/apis/highscore.api');
// const passportConfig = require('./src/middlewares/passport.middleware');

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

// ================== config ==================
app.use(express.json({ limit: MAX.SIZE_JSON_REQUEST }));
app.use(express.urlencoded({ limit: MAX.SIZE_JSON_REQUEST }));
app.use(cookieParser());
app.use(cors(corsConfig));

// ================== Apis ==================
const BASE_URL = '/apis';
app.use(`${BASE_URL}/account`, accountApi);
app.use(`${BASE_URL}/word`, wordApi);
// app.use(`${BASE_URL}/games`, gameApi);
app.use(`${BASE_URL}/flashcard`, flashcardApi);
app.use(`${BASE_URL}/common`, commonApi);
// app.use(`${BASE_URL}/sentence`, sentenceApi);
// app.use(`${BASE_URL}/blog`, blogApi);
// app.use(
//   `${BASE_URL}/highscore`,
//   passportConfig.jwtAuthentication,
//   highscoreApi,
// );

