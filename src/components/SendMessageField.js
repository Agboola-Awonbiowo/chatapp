import React, { useState } from 'react';
import { Button, FormControl, InputGroup, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { sendMessage } from '../Actions/MessageAction';

function SendMessageField() {
  const dispatch = useDispatch();
  const [message, setMessage] = useState({ value: '' });
  const user = useSelector((state) => {
    return state.login;
  });
  const handleChange = (event) => {
    setMessage({ value: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(sendMessage(message.value, user.username, user.id));
    setMessage({ value: '' });
  };
  return (
    <form onSubmit={handleSubmit}>
      <footer className="footer">
        <Row className="pl-5 pr-5">
          <InputGroup className="mb-3">
            <FormControl
              aria-describedby="basic-addon2"
              value={message.value}
              onChange={handleChange}
            />

            <Button
              disabled={0 === message.value.length}
              variant="primary"
              type="submit"
              value="Submit"
            >
              Send
            </Button>
          </InputGroup>
        </Row>
      </footer>
    </form>
  );
}

export default SendMessageField;
