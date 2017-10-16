import axios from 'axios';

export const submitModelRegistration = (values, history) => async dispatch => {
  console.log('values inside index.js', values)
  await axios.post('/api/registration/models', values);
  // const res = await axios('/api/registration/models', values);
  // console.log('history', history)
  // history.push('/');
  return { type: 'model_registration' };
}
