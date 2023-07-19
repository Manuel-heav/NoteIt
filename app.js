require("dotenv").config();

const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const connectDB = require("./server/config/db");
const session = require("express-session");
const passport = require("passport");
const MongoStore = require("connect-mongo");

const app = express();
const PORT = 1234 || process.env.PORT;

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: process.env.MONGO_DB_URI,
    }),
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

connectDB();

app.use(express.static("public"));

app.use(expressLayouts);

app.set("layout", "./layouts/main");
app.set("view engine", "ejs");

//routes
app.use("/", require("./server/routes/index"));
app.use("/", require("./server/routes/auth"));
app.use("/", require("./server/routes/dashboard"));

app.get("*", function (req, res) {
  res.status(404).render("404");
});

app.listen(PORT, () => {
  console.log(`Listening to ${PORT}`);
});
