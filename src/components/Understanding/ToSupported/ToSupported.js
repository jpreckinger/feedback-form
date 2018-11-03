import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

class ToSupported extends Component {

    goToSupported = () => {
    this.props.history.push('/3');
  }

  render() {
    return (
      <button onClick={this.goToSupported}>NEXT</button>
    )
  }
}

export default withRouter(ToSupported);