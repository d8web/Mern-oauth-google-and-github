const GoogleStrategy = require('passport-google-oauth20').Strategy
const GithubStrategy = require('passport-github2').Strategy
const passport = require("passport")

const GOOGLE_CLIENT_ID = ""
const GOOGLE_CLIENT_SECRET = ""

const GITHUB_CLIENT_ID = ""
const GITHUB_CLIENT_SECRET = ""

// GoogleStrategy
passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
    },
    function (accessToken, refreshToken, profile, done) {
        done(null, profile)
        
        // if you are using mongo db or other database system
        // const user = {
        //     username: profile.displayName,
        //     avatar: profile.photos[0]
        // }
        // user.save()
    }
))

// GithubStrategy
passport.use(new GithubStrategy({
    clientID: GITHUB_CLIENT_ID,
    clientSecret: GITHUB_CLIENT_SECRET,
    callbackURL: "/auth/github/callback"
    },
    function (accessToken, refreshToken, profile, done) {
        done(null, profile)
    }
))

passport.serializeUser((user, done) => {
    done(null, user)
})

passport.deserializeUser((user, done) => {
    done(null, user)
})