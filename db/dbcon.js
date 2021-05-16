const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

module.exports = mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then((res) => {
    console.log("CONNECTED TO DATABASE");
  })
  .catch((err) => {
    console.log('PROCESS ENV MONGODB URI ***************', process.env.MONGODB_URI)
    console.log("******* ERROR:", err);
  });
