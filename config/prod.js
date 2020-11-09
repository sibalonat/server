//  dev.js
module.exports = {
    googleClientID: process.env.GOOGLE_CLIENT_ID,
    // prod-key
    // 730920082863-t542fv9psvusclob9qv6556hjcjnrkng.apps.googleusercontent.com
    // prod-secret
    // 4fRnYKTtpR07vt64JOIx0s8q
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
    mongoURI: process.env.MONGO_URI,
    // mongodb+srv://marini:<password>@cluster0.xhtuk.mongodb.net/<dbname>?retryWrites=true&w=majority
    cookieKey: process.env.COOKIE_KEY
};