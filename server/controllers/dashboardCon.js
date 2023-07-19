const Note = require("../models/Notes");
const mongoose = require("mongoose");

exports.dashboard = async (req, res) => {
  async function insertUnimpData() {
    try {
      await Note.insertMany([
        {
          user: "asdfasdfasdf",
          title: "kjasdfasd",
          body: "asdklfjaskdjflkajsdkfljasdf",
          createdAt: "1671634422539",
        },
        {
          user: "asdfasdfasdf",
          title: "kjasdfasd",
          body: "asdklfjaskdjflkajsdkfljasdf",
          createdAt: "1671634422539",
        },
        {
          user: "asdfasdfasdf",
          title: "kjasdfasd",
          body: "asdklfjaskdjflkajsdkfljasdf",
          createdAt: "1671634422539",
        },
        {
          user: "asdfasdfasdf",
          title: "kjasdfasd",
          body: "asdklfjaskdjflkajsdkfljasdf",
          createdAt: "1671634422539",
        },
        {
          user: "asdfasdfasdf",
          title: "kjasdfasd",
          body: "asdklfjaskdjflkajsdkfljasdf",
          createdAt: "1671634422539",
        },
      ]);
    } catch (err) {
      console.log(err);
    }
  }
  const locals = {
    title: "Dashboard",
  };
  res.render("dashboard/index", {
    userName: req.user.firstName,
    locals,
    layout: "../views/layouts/dashboard",
  });
};
