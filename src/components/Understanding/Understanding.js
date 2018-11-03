import React, { Component } from 'react';
import ToSupported from './ToSupported/ToSupported';

class Understanding extends Component {
  render() {
    return (
    <div>
        <header>
            <h2>How well are you understanding the content?</h2>
        </header>
        <div>
            <input type="radio" id="understanding1" name="understanding" value="1"/>
            <label htmlFor="understanding1">1</label>
            <input type="radio" id="understanding2" name="understanding" value="2"/>
            <label htmlFor="understanding2">2</label>
            <input type="radio" id="understanding3" name="understanding" value="3"/>
            <label htmlFor="understanding3">3</label>
            <input type="radio" id="understanding4" name="understanding" value="4"/>
            <label htmlFor="understanding4">4</label>
            <input type="radio" id="understanding5" name="understanding" value="5"/>
            <label htmlFor="understanding5">5</label>
            <ToSupported />
        </div>
    </div>   
    );
  }
}

export default Understanding;
