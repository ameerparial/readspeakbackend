const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");

const { connect } = require("./connection/connect.js");
const authRouter = require("./routes/auth.route.js");
const ttsRouter = require("./routes/tts.route.js");
const userRouter = require("./routes/user.route.js");
const path = require("path");

const dirname = path.resolve();
const app = express();
app.use(express.json());
app.use(cookieParser());
dotenv.config();
const PORT = process.env.PORT;

connect();

// Serve static files from the 'public/assets' directory
app.use("/profiles", express.static(path.join(dirname, "profiles")));

app.use("/api/auth", authRouter);
app.use("/tts", ttsRouter);
app.use("/user", userRouter);

app.use(express.static(path.join(dirname, "front-end", "build")));
app.get("*", (req, res) => {
  console.log("I am caled");
  res.sendFile(path.resolve(dirname, "front-end", "build", "index.html"));
});

app.listen(PORT, () => {
  console.log("Server is listening at the port", PORT);
});
