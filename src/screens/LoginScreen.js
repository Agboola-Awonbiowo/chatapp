import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import ChatScreen from './ChatScreen';

function LoginScreen() {
  const [userName, setUserName] = useState('');
  const handleSubmit = () => {
    if (localStorage.setItem('name', userName)) {
      return <ChatScreen />;
    }
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
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="p-2"
            placeholder="Enter Username"
          />
        </div>
        <Button
          variant="primary"
          disabled={!userName}
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
