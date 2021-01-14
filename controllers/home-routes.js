// this contains all the user-facing routes, like homepage and login page

const router = require("express").Router();

router.get("/", (req, res) => {
  // render the file homepage.handlebars
  res.render("homepage");
});

module.exports = router;