exports.home = async (req, res) => {
  const locals = {
    title: "Notes",
  };
  res.render("index", { locals, layout: "../views/layouts/frontPage" });
};

exports.about = async (req, res) => {
  const locals = {
    title: "Notes - About",
  };
  res.render("about", locals);
};

exports.faq = async (req, res) => {
  const locals = {
    title: "Notes - FAQ",
  };
  res.render("faq", locals);
};

exports.features = async (req, res) => {
  const locals = {
    title: "Notes - Features",
  };
  res.render("features", locals);
};
