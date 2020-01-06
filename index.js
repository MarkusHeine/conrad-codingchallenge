const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const compression = require("compression");
const mongoose = require("mongoose");

// import routes
const apiRoute = require("./routes/gitHubApi");
const bookmarkRoute = require("./routes/bookmarksApi");

// middelware
app.use(express.json());
app.use(compression());

// route middelwares
app.use("/gitapi/", apiRoute);
app.use("/bookmarkapi/", bookmarkRoute);

/**
 * connects to mongoose database
 * @param {string} DB_CONNECT Login Data for the database
 */

mongoose.connect(process.env.DB_CONNECT, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.set("useFindAndModify", false);

app.listen(process.env.PORT);
