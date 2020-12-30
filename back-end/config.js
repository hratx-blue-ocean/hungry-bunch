const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  MONGO_USER: process.env.MONGO_USERNAME,
  MONGO_PASS: process.env.MONGO_PASSWORD,
  MONGO_URI: `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@hungry.jrmv9.mongodb.net/hungry?retryWrites=true&w=majority`
};