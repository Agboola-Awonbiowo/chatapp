import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import {v4 as uuid} from 'uuid'
import { login } from '../Actions/LoginAction';

function LoginScreen() {
  const [username, setUsername] = useState({ value: '' });
  const dispatch = useDispatch();
  const handleChange = (event) => {
    setUsername({ value: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const uid = uuid();
    dispatch(login(username.value, uid));
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="d-flex align-items-center justify-content-center vh-100"
    >
      <div>
        <div>
          <input
            type="text"
            value={username.value}
            onChange={handleChange}
            className="p-2"
            placeholder="Enter Username"
          />
        </div>
        <Button
          variant="primary"
          disabled={!username}
          className="btn-primary w-100 mt-3"
          type="submit"
        >
          Submit
        </Button>
      </div>
    </form>
  );
}
export default LoginScreen;
