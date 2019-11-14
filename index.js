const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

// import routes
const apiRoute = require("./routes/gitHubApi");
const bookmarkRoute = require("./routes/bookmarksApi");

// middelware
app.use(express.json());

// route middelwares
app.use("/gitapi/", apiRoute);
app.use("/bookmarkapi/", bookmarkRoute);


app.listen(process.env.PORT, () => console.log(`Listening in ${process.env.PORT} FM`));