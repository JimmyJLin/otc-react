
module.exports = app => {
  app.get('/api/registration/models', (req, res) => {
    console.log('emails')

    res.status(200).send('some text');
  });

  app.post('/api/registration/models', (req, res) => {
    // const { f_name, l_name, emails, modelType, phone } = req.body;
    console.log('data', req.body)
    res.redirect('/');

  })

}
