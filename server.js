//REQUIREMENTS________________
  const express = require('express');
  const path = require('path');
  const exphbs = require('express-handlebars');
  const session = require('express-session');
  const SequelizeStore = require('connect-session-sequelize')(session.Store);
  const routes = require('./controllers');
  const sequelize = require('./config/connection');

// APP/PORT______________________
  const app = express();
  const PORT = process.env.PORT || 3001;

// HANDLEBARS SETUP  
  const hbs = exphbs.create({});
  // Set Handlebars as the default template engine.
  app.engine('handlebars', hbs.engine);
  app.set('view engine', 'handlebars');

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
  app.use(express.static(path.join(__dirname, 'public')));
//ROUTES___________________
  app.use(routes);
//START SERVER________________________
  // sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
  // });
