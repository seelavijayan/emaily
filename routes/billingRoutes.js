const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
  app.post("/api/stripe", requireLogin, async (req, res) => {
    const charge = await stripe.paymentIntents.create({
      amount: 500,
      currency: "inr",
      description: "$5 for 5 credits",
      payment_method_data: {
        type: "card",
        card: {
          token: req.body.id,
        },
      },
      confirmation_method: "manual",
      confirm: "true",
    });
    req.user.credits += 5;
    const user = await req.user.save();
    res.send(user);
  });
};