const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
app.get("/", (req, res) => {
  res.send(`99 Bottles of beer on the wall <a href="/98">98</a>`);
});
//
app.get("/:number_of_bottles", (req, res) => {
  const newLink = req.params.number_of_bottles - 1;
  if (req.params.number_of_bottles <= 0 || req.params.number_of_bottles > 99) {
    console.log(`<a href="/>Start Over</a>`);
    res.send(`<a href="/">Start Over</a>`);
  } else {
    res.send(
      `${req.params.number_of_bottles} Bottles of beer on the wall <a href="${newLink}">Take one down, pass it around</a>`
    );
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port:${PORT}`);
});
