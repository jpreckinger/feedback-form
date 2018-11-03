import React, { Component } from 'react';

class Feeling extends Component {
  render() {
    return (
    <div>
        <header>
            <h2>How are you feeling today?</h2>
        </header>
        <div>
            <input type="radio" id="feeling1" name="feeling" value="1"/>
            <label for="feeling1">1</label>
            <input type="radio" id="feeling2" name="feeling" value="2"/>
            <label for="feeling2">2</label>
            <input type="radio" id="feeling3" name="feeling" value="3"/>
            <label for="feeling3">3</label>
            <input type="radio" id="feeling4" name="feeling" value="4"/>
            <label for="feeling4">4</label>
            <input type="radio" id="feeling5" name="feeling" value="5"/>
            <label for="feeling5">5</label>
            <button>Next</button>
        </div>
    </div>   
    );
  }
}

export default Feeling;
