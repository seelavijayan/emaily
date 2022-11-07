import axios from 'axios';
import { FETCH_USER_ACTION, FETCH_SURVEYS } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');
  dispatch({ type: FETCH_USER_ACTION, payload: res.data });
};

export const handleTokenAction = creditDetails => async dispatch => {
  const res = await axios.post("/api/stripe", creditDetails);
  dispatch({ type: FETCH_USER_ACTION, payload: res.data });
};

export const submitSurvey = (values, navigate) => async dispatch => {
  const res = await axios.post('/api/surveys', values);
  navigate('/surveys');
  dispatch({ type: FETCH_USER_ACTION, payload: res.data });
};

export const fetchSurveys = () => async dispatch => {
  const res = await axios.get('/api/surveys');
  dispatch({ type: FETCH_SURVEYS, payload: res.data });
};