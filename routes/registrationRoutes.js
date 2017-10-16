const mongoose = require('mongoose');
const Mailer = require('../services/Mailer');
const modelTemplate = require('../services/emailTemplates/modelTemplate');

const Model = mongoose.model('models');

module.exports = app => {
  app.get('/api/registration/models', (req, res) => {
    console.log('emails')

    res.status(200).send('some text');
  });

  app.post('/api/registration/models', async (req, res) => {
    const { f_name, l_name, emails, modelType, phone } = req.body;

    const model = new Model({
      f_name,
      l_name,
      emails,
      modelType,
      phone,
      date: Date.now()
    })

    const mailer = new Mailer(model, modelTemplate(model));
    try {
      await mailer.send()
      await model.save();

      res.redirect('/');
    } catch (err) {
      res.status(422).send(err);
    }
  })
}
