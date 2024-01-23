const router = require('express').Router();
const { User } = require('../models')


router.get('/', async (req, res) => {
  res.render('all');
});

router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
      res.redirect('/');
      return;
  }

  res.render('signup');
});

router.get('*', (req, res) => {
  res.status(404).send("Are you lost?");
  
})
module.exports = router;