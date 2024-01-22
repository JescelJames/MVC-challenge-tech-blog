const router = require('express').Router();
const homeRoutes = require('./homeroute.js');


//test test test
// router.get('/', (req, res) => res.send('Navigate to /send or /routes. jcv'));


router.use('/', homeRoutes);



module.exports = router;
