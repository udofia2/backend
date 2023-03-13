import dotenv from "dotenv";
import mongoose from "mongoose";
import logger from "./../config/logger.js";

dotenv.config();

// tells mongoose to use ES6 implementation of promises
mongoose.Promise = global.Promise;
const MONGODB_URI = process.env.CONNECTION_URL;
mongoose.connect(MONGODB_URI);

mongoose.connection
  .once("open", () => logger.info("Connected!"))
  .on("error", (error) => {
    logger.error(error);
  });

// runs before each test
beforeEach((done) => {
  mongoose.connection.collections.users.drop(() => {
    done();
  });
});
