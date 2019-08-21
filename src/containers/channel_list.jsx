import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchMessages, setSelectedChannel } from '../actions';

class ChannelList extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedChannel !== this.props.selectedChannel) {
      this.props.fetchMessages(nextProps.selectedChannel);
    }
  }

  handleClick = (channel) => {
    this.props.setSelectedChannel(channel);
  }

  render () {
    return (
      <div className="col-sm-3">
        <h4>Channels</h4>
        <ul className="list-group">
          {
            this.props.channels.map((channel) => {
              return (
                <li
                  className={`list-group-item ${this.props.selectedChannel === channel ? 'active' : ''}`}
                  key={channel}
                  onClick={() => this.handleClick(channel)}
                >
                  #{channel}
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    channels: state.channels,
    selectedChannel: state.selectedChannel
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMessages, setSelectedChannel }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);
