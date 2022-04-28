const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });

const usersRouter = require("./routes/usersRout");
const authRouter = require("./routes/auth");
const carsRouter = require("./routes/carsRout");
const bizRouter = require("./routes/bizRout");

mongoose
  .connect(
    "mongodb+srv://reutudler:reutudler@noto.4pllr.mongodb.net/NOTO?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("connected to mongo");
  })
  .catch((err) => {
    console.log("faild to connect to mongo server", err);
  });

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "noto-front/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "noto-front", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("running on development mode");
  });
}

app.use("/api/users", usersRouter);
app.use("/api/auth", authRouter);
app.use("/api/cars", carsRouter);
app.use("/api/biz", bizRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`connected on port ${PORT}`);
});
