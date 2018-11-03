import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

class ToComments extends Component {

    goToComments = () => {
    this.props.history.push('/4');
  }

  render() {
    return (
      <button onClick={this.goToComments}>NEXT</button>
    )
  }
}

export default withRouter(ToComments);