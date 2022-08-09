import React from 'react';
import {render} from 'react-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store'
import { Provider } from 'react-redux';
import { loadMessages, saveMessages, STORAGE_KEY } from './Storage'
import { loadStorageMessages } from './Actions/MessageAction'

const TARGET_ROOT = document.getElementById('root');

const configureStore = store({
  login: {
      isLogged: false,
      username: '',
      id: ''
  },
  messages: {
      message: loadMessages()
  }
});

configureStore.subscribe(() => {
  const state = configureStore.getState();
  saveMessages(state.messages.message || []);
});

window.addEventListener('storage', e => {
  if (e.key !== STORAGE_KEY) {
      return;
  }

  const loadedMessages = JSON.parse(e.newValue);
  if (!Array.isArray(loadedMessages)) {
      return;
  }

  configureStore.dispatch(loadStorageMessages(loadedMessages));
});
render(
  <Provider store={configureStore}>
    <App />
  </Provider>,
   TARGET_ROOT
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
