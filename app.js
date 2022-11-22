const express = require("express");

const blog = { id: 1, title: "Blog title", description: "Blog description" };

const app = express();

app.get("/", (req, res) => {
  res.send(blog);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server ${port} portunda başlatıldı`);
});
