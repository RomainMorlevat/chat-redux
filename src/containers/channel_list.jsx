import React from 'react';

import { connect } from 'react-redux';

const ChannelList = (props) => {
  return (
    <div className="col-sm-3">
      <h4>Channels</h4>
      <ul className="list-group">
        {
          props.channels.map((channel) => {
            return <li className={`list-group-item ${props.selectedChannel === channel ? 'active' : ''}`}>#{channel}</li>;
          })
        }
      </ul>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    channels: state.channels,
    selectedChannel: state.selectedChannel
  }
}

export default connect(mapStateToProps, null)(ChannelList);
