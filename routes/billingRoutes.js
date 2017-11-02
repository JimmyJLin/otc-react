const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);

module.exports = app => {

  app.post('/api/stripe', async (req, res) => {
    console.log("-------->", req.body)

    const charge = await stripe.charges.create({
      amount: req.body.seminarFee,
      currency: 'usd',
      description: req.body.seminarTitle,
      source: req.body.id,
    });

    res.send(200);
  });

};
