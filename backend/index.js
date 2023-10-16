const express = require("express");
const cors = require("cors");

const userRouter = require("./routers/userRouter");
const designRouter = require("./routers/designRouter");


const app = express();

require("dotenv").config();

// middlewares
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.json());
app.use(express.static("./uploads"));

app.use("/user", userRouter);
app.use("/design", designRouter);

app.get("/", (req, res) => {
  res.send("Working Fine!!");
});

app.listen(process.env.PORT, () => {
  console.info("Server Started>>");
});
