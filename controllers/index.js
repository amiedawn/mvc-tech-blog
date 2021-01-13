// collect the packaged API routes in this file

const router = require('express').Router();

const apiRoutes = require('./api');

router.use('/api', apiRoutes);

// if we make a request to an endpoint that doesn't exist, get a 404 error
router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;