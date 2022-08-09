import React from 'react';
function Message  ({isOwn, sender, children, time}) {
    const owner = isOwn;
    return (
        <React.Fragment>
            {
                owner ? (
                    <li className="clearfix pb-3 list-unstyled">
                        <div className="message-data">
                            <span className="font-weight-bold">{sender}</span>
                        </div>
                        <div className="badge badge-primary text-wrap text-break" style={{padding: '15px', fontSize: 16, background: '#1E003E'}}>{children}</div> 
                        <div className="message-data">
                            <span className="font-weight-bold">{time}</span>
                        </div>                                   
                    </li> 
                ) : (
                    <li className="clearfix pb-3 text-end list-unstyled">
                        <div className="message-data">
                            <span className="font-weight-bold">{sender}</span>
                        </div>
                        <div className="badge badge-secondary text-wrap text-break float-right"  style={{padding: '15px', fontSize: 16, background: '#ebebeb', color: '#6c757d',}}>{children}</div>
                        <div className="message-data">
                            <span className="font-weight-bold">{time}</span>
                        </div>
                    </li>
                )
            }
        </React.Fragment>
    );
};

export default Message;