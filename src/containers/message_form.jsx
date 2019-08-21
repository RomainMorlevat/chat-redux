import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createMessage } from '../actions';

class MessageForm extends Component {
  constructor(props) {
    super(props);

    this.state = { value: '' };
  }

  componentDidMount() {
    this.messageBox.focus();
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createMessage(this.props.selectedChannel, this.props.currentUserName, this.state.value);
    this.setState({ value: '' });
  }

  render() {
    return (
      <form className="form-inline" onSubmit={this.handleSubmit}>
        <div className="form-group col-sm-11">
          <input
            className="form-control mb-2"
            onChange={this.handleChange}
            ref={(messageBox) => { this.messageBox = messageBox; }}
            style={{ width: "100%" }}
            type="text"
            value={this.state.value}
          />
        </div>
        <div className="col-sm-1">
          <button type="submit" className="btn btn-primary mb-2">Send</button>
        </div>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createMessage }, dispatch);
}

function mapStateToProps(state) {
  return {
    currentUserName: state.currentUserName,
    selectedChannel: state.selectedChannel
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);
