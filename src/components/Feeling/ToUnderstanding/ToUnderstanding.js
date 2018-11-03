import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

class ToUnderstanding extends Component {

    goToUnderstanding = () => {
    this.props.history.push('/2');
  }

  render() {
    return (
      <button onClick={this.goToUnderstanding}>NEXT</button>
    )
  }
}

export default withRouter(ToUnderstanding);