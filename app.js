const express = require("express");
const cors = require("cors");
const path = require('path');
require("./db/dbcon");

const PORT = process.env.PORT || 5000;
const app = express();
app.use(cors());
const postsRoute = require("./routes/posts");
const adminRoute = require("./routes/admin");
const userRoute = require("./routes/users");
const newsLetterRoute = require("./routes/newsletter");

app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ limit: "25mb", extended: true }));
app.use(postsRoute);
app.use(adminRoute);
app.use(userRoute);
app.use(newsLetterRoute);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/client/build/index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`---- APP LISTENING AT PORT ${PORT} ------`);
});
