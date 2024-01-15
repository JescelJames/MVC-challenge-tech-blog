//REQUIREMENTS________________
  const express = require('express');
  const session = require('express-session');
  const routes = require('./controllers');
  const sequelize = require('./config/connection');
  const SequelizeStore = require('connect-session-sequelize')(session.Store);
// APP/PORT______________________
  const app = express();
  const PORT = process.env.PORT || 3001;
// //SESSION _______________________
//   const sess = {
//     secret: 'Super secret secret',
//     cookie: {},
//     resave: false,
//     saveUninitialized: true,
//     store: new SequelizeStore({
//       db: sequelize
//     })
//   };
//   app.use(session(sess));
//MIDDLEWARES_________________  
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
//ROUTES___________________
  app.use(routes);
//START SERVER________________________
  // sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
  // });
