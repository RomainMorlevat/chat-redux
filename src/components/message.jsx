import React from 'react';

const Message = (props) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{props.message.author}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{props.message.created_at}</h6>
        <p className="card-text">{props.message.content}</p>
      </div>
    </div>
  );
};

export default Message;
