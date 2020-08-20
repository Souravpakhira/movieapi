const mongoose = require("mongoose");

const URI =
  "mongodb+srv://sourav:sourav123@cluster0-ih6dy.gcp.mongodb.net/movieList?retryWrites=true&w=majority";

const connectDB = async () => {
  await mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
