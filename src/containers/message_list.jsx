import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchMessages } from '../actions';

import Message from '../components/message';
import MessageForm from './message_form';

class MessageList extends Component {
  constructor(props) {
    super(props);

    let interval;
  }

  componentWillMount() {
    this.fetchMessagesFunction();
  }

  componentDidMount() {
    this.interval = setInterval(this.fetchMessagesFunction, 5000);
  }

  componentDidUpdate() {
    this.messageList.scrollTop = this.messageList.scrollHeight;
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  fetchMessagesFunction = () => {
    this.props.fetchMessages(this.props.selectedChannel);
  }

  render () {
    return (
      <div className="col-sm-9 message-list">
        <h4>Channel #{this.props.selectedChannel}</h4>
        <div ref={(messageList) => { this.messageList = messageList; }} style={{ boxSizing: "border-box",height: "80vh", overflow: "scroll"}}>
          <ul>
            {
              this.props.messages.map((message) => {
                return <Message message={message} key={message.id} />;
              })
            }
          </ul>
        </div>
        <MessageForm />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages,
    selectedChannel: state.selectedChannel
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMessages }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
