// keep API endpoints organized allow the API to be scalable in this file

const router = require('express').Router();
 
const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');

// give api endpoints a prefixed name
router.use('/users', userRoutes);
router.use('/posts', postRoutes);

module.exports = router;