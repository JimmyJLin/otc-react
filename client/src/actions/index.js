import axios from 'axios';

export const submitModelRegistration = (values, history) => async dispatch => {
  console.log('values inside index.js', values)

  const res = await axios.post('/api/registration/models', values);

  console.log("history inside", history)

  // const res = await axios('/api/registration/models', values);
  // console.log('history', history)
  // history.push('/');
  // push('/')
  // history.push('/');
  dispatch({ type: 'model_registration', payload: res.data })
  // return { type: 'model_registration' };
}
