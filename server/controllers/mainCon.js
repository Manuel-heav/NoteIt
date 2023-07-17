exports.home = async (req, res) => {
  const locals = {
    title: "Notes",
  };
  res.render("index", locals);
};

exports.about = async (req, res) => {
  const locals = {
    title: "Notes - About",
  };
  res.render("about", locals);
};
