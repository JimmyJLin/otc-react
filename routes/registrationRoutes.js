const mongoose = require('mongoose');
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

    await model.save();

    res.redirect('/');

  })

}
