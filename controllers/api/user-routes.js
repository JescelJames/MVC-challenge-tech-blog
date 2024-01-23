const router = require('express').Router();
const { User } = require('../../models');

// CREATE A NEW USER
router.post('/', async (req, res) => {
  try {
    const userData = await User.create(
      {
        username: req.body.username,
        password: req.body.password
      }
    );
    // Save session information after successfully creating the user
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.username = userData.username;
      req.session.loggedIn = true;

      // res.json(userData);
      res.status(200).json(userData);
    });
      
  }
  catch (err) {
    res.status(400).json(err);
  }

});



module.exports = router;