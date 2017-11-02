import axios from 'axios';

export const handleToken = (token, fee, title) => async dispatch => {
  console.log('token', token)

  const seminar = {
    fee: fee,
    title: title
  }
  // console.log('Token', token)

  token.seminarFee = fee;
  token.seminarTitle = title

  // console.log('New Token', token)

  const res = await axios.post('/api/stripe', token);

  dispatch({ type: 'stripe'})
};

export const submitModel = (values, history) => async dispatch => {
  // console.log('values inside action', values)
  await axios.post('/api/registration/models', values);

  history.push('/');
  // dispatch({ type: 'model_registration', payload: res.data })
  dispatch({ type: 'model_registration'})
  // dispatch(reset('modelForm'));

}
