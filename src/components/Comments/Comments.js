import React, { Component } from 'react';
import SubmitButton from './SubmitButton/SubmitButton';

class Comments extends Component {
  render() {
    return (
    <div>
        <header>
            <h2>Any comments you want to leave?</h2>
        </header>
        <div>
            <input type="text" />
            <SubmitButton />
        </div>
    </div>   
    );
  }
}

export default Comments;
