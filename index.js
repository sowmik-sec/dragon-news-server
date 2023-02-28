const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());

const news = require("./data/news.json");

const categories = require("./data/categories.json");

app.get("/", (req, res) => {
  res.send("News API Running");
});

app.get("/news-categories", (req, res) => {
  res.send(categories);
});

app.get("/news/:id", (req, res) => {
  const id = req.params.id;
  const selectedNews = news.find((n) => n._id === id);
  res.send(selectedNews);
});

app.listen(port, () => {
  console.log("Dragon News Server running on port", port);
});
