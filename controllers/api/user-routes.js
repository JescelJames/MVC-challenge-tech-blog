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



router.post('/login', async (req, res) => {
  try {
      const UserData = await User.findOne({
          where: {
              username: req.body.username
          }
      });

      if (!UserData) {
          res.status(400).json({ message: 'No user with that username!' });
          return;
      }

      const validPassword = UserData.checkPassword(req.body.password);

      if (!validPassword) {
          res.status(400).json({ message: 'Incorrect password!' });
          return;
      }

      // Save session information only if the user is found and the password is valid
      req.session.save(() => {
          req.session.user_id = UserData.id;
          req.session.username = UserData.username;
          req.session.loggedIn = true;

          res.json({
              user: UserData,
              message: 'You are now logged in!'
          });
      });

  } catch (err) {
      console.log(err);
      res.status(500).json(err);
  }
});




module.exports = router;