const mongoose = require('mongoose');
const ModelMailer = require('../services/ModelMailer');
const ClientMailer = require('../services/ClientMailer');

const modelTemplate = require('../services/emailTemplates/modelTemplate');
const clientTemplate = require('../services/emailTemplates/clientTemplate');

const Model = mongoose.model('models');

module.exports = app => {
  app.get('/api/registration/models', (req, res) => {
    console.log('emails')

    res.status(200).send('some text');
  });

  app.post('/api/registration/models', async (req, res) => {
    const { f_name, l_name, emails, modelType, phone } = req.body;

    const client = new Model({
      f_name,
      l_name,
      emails,
      modelType,
      phone,
      date: Date.now()
    })

    const model = new Model({
      f_name,
      l_name,
      emails,
      modelType,
      phone,
      date: Date.now()
    })

    const modelMailer = new ModelMailer(model, modelTemplate(model));
    const clientMailer = new ClientMailer(client, clientTemplate(client));

    try {
      await modelMailer.send();
      await clientMailer.send();
      await model.save();

      res.redirect('/');
    } catch (err) {
      res.status(422).send(err);
    }
  })
}
