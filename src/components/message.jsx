import React from 'react';
import { emojify } from 'react-emojione';

function hashCode(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i += 1) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  const c = (hash & 0x00FFFFFF)
    .toString(16)
    .toUpperCase();

  return `#${"00000".substring(0, 6 - c.length) + c}`;
}

const Message = (props) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title" style={{ color: hashCode(props.message.author) }}>{props.message.author}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{new Date(props.message.created_at).toLocaleTimeString()}</h6>
        <p className="card-text">{emojify(props.message.content)}</p>
      </div>
    </div>
  );
};

export default Message;
