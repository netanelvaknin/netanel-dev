const mongoose = require("mongoose");

module.exports = mongoose
  .connect(process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/netanel-dev", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then((res) => {
    console.log("CONNECTED TO DATABASE");
  })
  .catch((err) => {
    console.log("ERROR WITH CONNECTION");
  });
