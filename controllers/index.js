const router = require('express').Router();
const homeRoutes = require('./homeroute.js');
const apiRoutes = require('./api');


//test test test
// router.get('/', (req, res) => res.send('Navigate to /send or /routes. jcv'));


router.use('/', homeRoutes);
router.use('/api', apiRoutes);


module.exports = router;
