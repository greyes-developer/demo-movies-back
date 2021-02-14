const express = require("express");
require("dotenv").config();
const { dbConnection } = require("./database/config");

//Create express service
const app = express();

//Database
dbConnection();

//Support json requests
app.use(express.json());

//Routes
app.use("/api/movies-favorites", require("./routes/movie"));

app.listen(process.env.PORT, () => {
  console.log(`Server running on ${process.env.PORT} port`);
});
