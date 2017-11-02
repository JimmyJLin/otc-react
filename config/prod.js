// prod.js - production keys here!!!

module.exports = {
  mongoURI: process.env.MONGO_URI,
  sendGridKey: process.env.SEND_GRID_KEY,
  stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  stripeSecretKey: process.env.STRIPE_SECRET_KEY
}
