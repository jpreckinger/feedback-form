import React, { Component } from 'react';

class Comments extends Component {
  render() {
    return (
    <div>
        <header>
            <h2>Any comments you want to leave?</h2>
        </header>
        <div>
            <input type="text" />
            <button>Submit</button>
        </div>
    </div>   
    );
  }
}

export default Comments;
