const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const compression = require("compression");

// import routes
const apiRoute = require("./routes/gitHubApi");
const bookmarkRoute = require("./routes/bookmarksApi");

// middelware
app.use(express.json());
app.use(compression());

// route middelwares
app.use("/gitapi/", apiRoute);
app.use("/bookmarkapi/", bookmarkRoute);

app.listen(process.env.PORT);
