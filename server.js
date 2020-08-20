const express = require("express");
const connectDB = require("./Db/Connection");
const app = express();

connectDB();
app.use(express.json({ extended: false }));
app.use("/api/movieModel", require("./Api/Movie"));
app.use("/api/movieModel", require("./Api/Movie"));
const Port = process.env.Port || 3000;

app.listen(Port, () => console.log("server started"));
