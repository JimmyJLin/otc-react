const mongoose = require('mongoose');
const { Schema } = mongoose;

const modelSchema = new Schema({
  f_name: String,
  l_name: String,
  emails: String,
  modelType: String,
  phone: String,
  date: Date
});

mongoose.model('models', modelSchema);
