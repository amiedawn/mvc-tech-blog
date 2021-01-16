// check for existence of a session property and redirect if it's not there
// if session does exist, it will call next() and likely render the template
const withAuth = (req, res, next) => {
  if (!req.session.user_id) {
    res.redirect("/login");
  } else {
    next();
  }
};

module.exports = withAuth;