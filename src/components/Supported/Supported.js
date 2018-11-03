import React, { Component } from 'react';
import ToComments from './ToComments/ToComments';

class Supported extends Component {
  render() {
    return (
    <div>
        <header>
            <h2>How well are you being supported?</h2>
        </header>
        <div>
            <input type="radio" id="supported1" name="supported" value="1"/>
            <label for="supported1">1</label>
            <input type="radio" id="supported2" name="supported" value="2"/>
            <label for="supported2">2</label>
            <input type="radio" id="supported3" name="supported" value="3"/>
            <label for="supported3">3</label>
            <input type="radio" id="supported4" name="supported" value="4"/>
            <label for="supported4">4</label>
            <input type="radio" id="supported5" name="supported" value="5"/>
            <label for="supported5">5</label>
            <ToComments />
        </div>
    </div>   
    );
  }
}

export default Supported;
