const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

// import routes
const apiRoute = require("./routes/gitHubApi");

// middelware
app.use(express.json());

// route middelwares
app.use("/gitapi/", apiRoute);


app.listen(3000, () => console.log("Listening in 3000 FM"));