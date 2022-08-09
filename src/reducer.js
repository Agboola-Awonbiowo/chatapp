import { combineReducers } from 'redux';
import login from './Reducers/LoginReducer';
import messages from './Reducers/MessageReducer';

export default combineReducers({
  login,
  messages,
});
