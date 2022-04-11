const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const PORT = process.env.PORT || 4001;
require("dotenv").config();

const exercisesRouter = require("./routes/exercises");
const usersRouter = require("./routes/users");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  })
);
app.use(express.json());

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

app.use("/exercises", exercisesRouter);
app.use("/users", usersRouter);

const uri = process.env.ATLAS_URI;
// mongoose.connect(uri, {
//   useNewUrlParser: true,
//   useCreateIndex: true,
//   useUnifiedTopology: true,
// });

const boot = async () => {
  // Connect to mongodb
  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  });
  // Start express server
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
};

boot();

// app.listen(port, () => {
//   console.log(`Server is running on port: ${port}`);
// });
