exports.dashboard = async (req, res) => {
  const locals = {
    title: "Dashboard",
  };
  res.render("dashboard/index", {
    locals,
    layout: "../views/layouts/dashboard",
  });
};
