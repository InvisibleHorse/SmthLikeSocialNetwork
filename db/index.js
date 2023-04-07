const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
// eslint-disable-next-line import/no-extraneous-dependencies
const session = require('express-session');
// eslint-disable-next-line import/no-extraneous-dependencies
const passport = require('passport');
// eslint-disable-next-line import/no-extraneous-dependencies
const LocalStrategy = require('passport-local').Strategy;
// eslint-disable-next-line import/no-extraneous-dependencies
const bcrypt = require('bcrypt');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(cors({ credentials: true, origin: true }));

app.use(session({
  secret: 'Onyx zaebav.',
  resave: false,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect('mongodb://127.0.0.1:27017/users');

const usersSchema = {
  key: Number,
  name: String,
  img: String,
  from: String,
  born: String,
  career: String,
  followed: Boolean,
  backgroundImg: String,
  email: String,
  password: String,
  secret: String
};

const User = mongoose.model('User', usersSchema, 'users');

passport.use(new LocalStrategy(
  { // or whatever you want to use
    usernameField: 'email', // define the parameter in req.body that passport can use as username and password
    passwordField: 'password'
  },
  ((username, password, done) => { // done is a callback function
    try {
      User.findOne({ email: username }).then((user) => {
        if (!user) {
          return done(null, false, { message: 'Incorrect Username' });
        }
        // using bcrypt to encrypt password in register post route and compare function in login post round.
        // login post route will check here during authentication so need to use compare here
        bcrypt.compare(password, user.password, (err, result) => {
          if (err) {
            console.log('errrr', err);
            return done(err);
          }

          if (result) {
            return done(null, user);
          }
          return done(null, false, { message: 'Incorrect Password' });
        });
      });
    } catch (err) {
      return done(err);
    }
  })
));
// serialize user
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// deserialize user
passport.deserializeUser((id, done) => {
  console.log('Deserializing User');
  try {
    User.findById(id).then((user) => {
      done(null, user);
    });
  } catch (err) {
    done(err);
  }
});

app
  .get('/users/:page/:limit', (async (req, res) => {
    try {
      const page = parseInt(req.params.page);
      const limit = parseInt(req.params.limit);
      const foundusers = await User.find({}).skip(page * limit).limit(limit).then((value) => res.send(value));
    } catch (error) {
      res.send(error);
    }
  }))
  .post((req, res) => {
    const newUser = new User({
      key: req.body.key,
      name: req.body.name,
      img: req.body.img,
      from: req.body.from,
      born: req.body.born,
      career: req.body.career,
      followed: req.body.followed,
      backgroundImg: req.body.backgroundImg
    });

    newUser.save();
  })
  .delete((req, res) => {
    User.deleteMany().then((value) => res.send(value));
  });

app
  .get('/users/:id', (async (req, res) => {
    try {
      const foundSpecUser = await User.findOne({ key: req.params.id });
      res.send(foundSpecUser);
    } catch (error) {
      res.send(error);
    }
  }));

app.post('/register', (req, res) => {
  bcrypt.hash(req.body.password, 10, (err, hash) => { // 10 is SaltRounds
    if (err) {
      console.log(err);
    }
    const user = new User({
      email: req.body.email,
      password: hash,
      name: req.body.name
    });
    user.save();

    passport.authenticate('local')(req, res, () => { res.redirect('/'); });
  });
});

app.post('/auth', passport.authenticate('local', { successRedirect: '/profile', failureRedirect: '/auth' }));

app.get('/auth', (req, res) => {
  console.log(req);
  console.log(req.isAuthenticated());
  if (req.isAuthenticated() && req.user) {
    res.status(200).send({ resultCode: 0, email: req.user.email, name: req.user.name });
  } else {
    res.status(400).send({ resultCode: 1 });
  }
});

app.listen(3001, () => {
  console.log('Server started on port 3000');
});
