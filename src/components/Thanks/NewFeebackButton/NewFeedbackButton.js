import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

class NewFeedbackButton extends Component {

    goToStart = () => {
    this.props.history.push('/');
  }

  render() {
    return (
      <button onClick={this.goToStart}>Leave New Feedback</button>
    )
  }
}

export default withRouter(NewFeedbackButton);