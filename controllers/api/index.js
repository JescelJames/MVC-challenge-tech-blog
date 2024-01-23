const router = require('express').Router();

const userRoute = require('./userroute.js');

router.use('/users', userRoute);

module.exports = router;