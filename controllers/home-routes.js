const router = require('express').Router();
const { User } = require('../models')


router.get('/', async (req, res) => {
  res.render('all');
}); // this is for testing, delete when done.

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
      res.redirect('/');
      return;
  }

  res.render('login');
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