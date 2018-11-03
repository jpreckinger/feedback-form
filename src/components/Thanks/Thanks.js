import React, { Component } from 'react';
import NewFeedbackButton from './NewFeebackButton/NewFeedbackButton';

class Thanks extends Component {
  render() {
    return (
    <div>
        <header>
            <h1>Thank you!</h1>
        </header>     
        <NewFeedbackButton />       
    </div>   
    );
  }
}

export default Thanks;
