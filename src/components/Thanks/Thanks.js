import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

class Thanks extends Component {

  handleClick = () => {
    this.props.history.push('/');
  }

  render() {
    return (
    <div>
        <header>
            <h1>Thank you!</h1>
        </header>     
        <button onClick={this.handleClick}>Leave New Feedback</button>       
    </div>   
    );
  }
}

export default withRouter(Thanks);
