// collect the packaged API routes in this file

const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');

router.use('/api', apiRoutes);

// if we make a request to an endpoint that doesn't exist, get a 404 error
router.use((req, res) => {
  res.status(404).end();
});

router.use('/', homeRoutes);
module.exports = router;