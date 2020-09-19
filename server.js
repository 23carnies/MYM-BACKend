const express = require("express");
const app = express();
const path = require("path");
const logger = require("morgan");

require("dotenv").config();
require("./config/database");

const userRouter = require("./routes/users");
const authRouter = require("./routes/auth");
const productRouter = require("./routes/products")
const reviewRouter = require("./routes/reviews")
const storeRouter = require("./routers/stores")

const cors = require("cors");

app.use(cors());
app.use(logger("dev"));
app.use(express.json());

app.use(express.static(path.join(__dirname, "build")));

app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/reviews", reviewRouter)
app.use("/api/stores", storeRouter)

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Express is listening on port ${port}.`);
});
