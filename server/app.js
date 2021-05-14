const express = require("express");
const cors = require("cors");
require("./db/dbcon");

const app = express();
app.use(cors());
const PORT = 5000;
const postsRoute = require("./routes/posts");
const adminRoute = require("./routes/admin");
const userRoute = require("./routes/users");

app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ limit: "25mb", extended: true }));
app.use(postsRoute);
app.use(adminRoute);
app.use(userRoute);

app.listen(process.env.PORT || PORT, () => {
  console.log(`---- APP LISTENING AT PORT ${PORT} ------`);
});
