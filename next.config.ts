import dotenv from "dotenv";

dotenv.config();

module.exports = {
  env: {
    MOVIEDB_KEY: process.env.MOVIEDB_KEY
  }
};