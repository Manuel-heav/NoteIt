exports.home = async (req, res) => {
  const locals = {
    title: "NoteIT",
  };
  res.render("index", { locals, layout: "../views/layouts/frontPage" });
};

exports.about = async (req, res) => {
  const locals = {
    title: "NoteIT - About",
  };
  res.render("about", locals);
};

exports.contact = async (req, res) => {
  const locals = {
    title: "NoteIT - Contact",
  };
  res.render("contact", locals);
};
