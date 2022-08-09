import React from 'react';
import SendMessageField from '../components/SendMessageField';
import MessageHistory from '../components/MessagesHistory';
import { Col, Row} from 'react-bootstrap';

function ChatScreen ()  {
    return (
        <React.Fragment>
            <Row className='p-0 m-0'>
                <Col className='bg-light p-0 m-0'>
                    <MessageHistory />
                    <SendMessageField />
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default ChatScreen;
