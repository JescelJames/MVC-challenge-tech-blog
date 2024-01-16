const router = require('express').Router();


//test test test
// router.get('/', (req, res) => res.send('Navigate to /send or /routes. jcv'));


router.get('/', async (req, res) => {
  res.render('all');
});
module.exports = router;
