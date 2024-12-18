const passport = require('passport');
const SpotifyStrategy = require('passport-spotify').Strategy;

passport.use(new SpotifyStrategy({
  clientID: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  callbackURL: process.env.SPOTIFY_CALLBACK_URL
}, (accessToken, expires_in, profile, done) => {
  // Save user profile and tokens
  profile.accessToken = accessToken;
  profile.expires_in = expires_in;
  return done(null, profile);
}));

// Serialize user
passport.serializeUser((user, done) => {
  done(null, user);
});

// Deserialize user
passport.deserializeUser((obj, done) => {
  done(null, obj);
});


module.exports = passport;