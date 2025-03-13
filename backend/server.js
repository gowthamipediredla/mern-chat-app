const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { chats } = require("./data/data");
const app = express();
app.use(cors());

dotenv.config();

app.get("/", (req, res) => {
  res.send("api running");
});

app.get("/api/chat", (req, res) => {
  res.send(chats);
});

app.get("/api/chat/:id", (req, res) => {
  const id = req.params.id;
  const filteredUser = chats.find((c) => c._id === id);
  res.send(filteredUser);
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log("server started on port " + PORT));
