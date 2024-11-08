const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 5001;
const axios = require('axios');
const querystring = require('querystring');

// Middleware Includes
const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');
const spotifyPassport = require('./strategies/spotify.strategy');

// Route Includes
const userRouter = require('./routes/user.router');
const ratingRouter = require('./routes/rating.router');


function configureServer(app){
  // Express Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('build'));

// Passport Session Configuration
app.use(sessionMiddleware);

// Start Passport Sessions
app.use(passport.initialize());
app.use(passport.session());

// Start Spotify Passport Sessions
app.use(spotifyPassport.initialize());
app.use(spotifyPassport.session());

// Routes
app.use('/api/user', userRouter);
app.use('/api/rating', ratingRouter);

app.get('/auth/spotify', spotifyPassport.authenticate('spotify'));
app.get('/auth/spotify/callback', spotifyPassport.authenticate('spotify', {failureRedirect: '/'}), (req, res) => {
  res.redirect('/')
});

app.post('/refresh_token', async (req, res) => {
  const refreshToken = req.body.refresh_token;
  const response = await axios.post('https://accounts.spotify.com/api/token', querystring.stringify({
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
      client_id: process.env.SPOTIFY_CLIENT_ID,
      client_secret: process.env.SPOTIFY_CLIENT_SECRET,
    }), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    res.json(response.data);
  });

}

configureServer(app);

// Listen Server & Port
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
