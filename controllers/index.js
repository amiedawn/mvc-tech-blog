// collect the packaged API routes in this file

const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const dashboardRoutes = require("./dashboard-routes.js");

// add prefixes to routes
router.use('/api', apiRoutes);
router.use("/", homeRoutes);
router.use("/dashboard", dashboardRoutes);

// if we make a request to an endpoint that doesn't exist, get a 404 error
router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;