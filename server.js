const express = require("express");

const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");

const app = express();
const mongoose = require("mongoose");
const colors = require("colors");

app.get("/", (req, res) => {
  res.send("Hello Wordl");
});

app.use("/api/v1/users", users);
app.use("/api/v1/profile", profile);
app.use("/api/v1/posts", posts);

// DB config
const db = require("./config/keys").MONGO_URI;

// Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log(`Database Connected`.bold.blue))
  .catch((err) => console.log(err));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`The server is running on http://localhost:${port}`.bold.yellow);
});
