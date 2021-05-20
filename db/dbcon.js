const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const MONGODB_URI = process.env.NODE_ENV === 'development' ? 'mongodb://localhost:27017/' : process.env.MONGODB_URI;
module.exports = mongoose  
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then((res) => {
    console.log("CONNECTED TO DATABASE");
  })
  .catch((err) => {
    console.log("******* ERROR:", err);
  });
