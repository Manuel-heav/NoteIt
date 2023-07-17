require("dotenv").config();

const express = require("express");
const expressLayouts = require("express-ejs-layouts");

const app = express();
const PORT = 1234 || process.env.PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.use(expressLayouts);

app.set("layout", "./layouts/main");
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  const locals = {
    title: "Notes",
  };
  res.render("index", locals);
});

app.listen(PORT, () => {
  console.log(`Listening to ${PORT}`);
});
