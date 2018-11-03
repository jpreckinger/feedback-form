import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

class SubmitButton extends Component {

    goToThanks = () => {
    this.props.history.push('/5');
  }

  render() {
    return (
      <button onClick={this.goToThanks}>Submit</button>
    )
  }
}

export default withRouter(SubmitButton);