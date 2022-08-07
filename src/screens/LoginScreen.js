import React from 'react';
import { Button } from 'react-bootstrap';

function LoginScreen() {
  
  return (
    <form className="d-flex align-items-center justify-content-center vh-100">
      <div>
        <div>
          <input type="text" className='p-2' placeholder="Enter Username" />
        </div>
        <Button variant="primary" className="btn-primary w-100 mt-3">
          Submit
        </Button>
      </div>
    </form>
  );
}
export default LoginScreen;