require("dotenv").config();

const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const connectDB = require("./server/config/db");

const app = express();
const PORT = 1234 || process.env.PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

connectDB();

app.use(express.static("public"));

app.use(expressLayouts);

app.set("layout", "./layouts/main");
app.set("view engine", "ejs");

//routes
app.use("/", require("./server/routes/index"));
app.use("/", require("./server/routes/dashboard"));

app.get("*", function (req, res) {
  res.status(404).render("404");
});

app.listen(PORT, () => {
  console.log(`Listening to ${PORT}`);
});
