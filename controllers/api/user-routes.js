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
    
      res.status(200).json(userData);
  }

  catch (err) {
    res.status(400).json(err);
  }


})



module.exports = router;