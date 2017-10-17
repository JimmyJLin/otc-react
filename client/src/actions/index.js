import axios from 'axios';

export const submitModel = (values, history) => async dispatch => {
  // console.log('values inside action', values)
  await axios.post('/api/registration/models', values);

  history.push('/');
  // dispatch({ type: 'model_registration', payload: res.data })
  dispatch({ type: 'model_registration'})
  // dispatch(reset('modelForm'));

}
