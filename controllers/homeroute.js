const router = require('express').Router();


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


module.exports = router;