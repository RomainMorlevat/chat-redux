import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchMessages } from '../actions';

class ChannelList extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.channelFromParams !== this.props.channelFromParams) {
      this.props.fetchMessages(nextProps.channelFromParams);
    }
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
                  className={`list-group-item ${this.props.channelFromParams === channel ? 'active' : ''}`}
                  key={channel}
                >
                  <Link to={`/${channel}`}>
                    #{channel}
                  </Link>
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
  return bindActionCreators({ fetchMessages }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);
