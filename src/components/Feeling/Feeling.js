import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

// import ToUnderstanding from './ToUnderstanding/ToUnderstanding';

class Feeling extends Component {

    state = {
        value: 3
    }

    handleClick = () => {
        this.props.history.push('/2');
        this.props.dispatch( { type: 'SET_FEEDBACK', payload: Number(this.state.value) } );
    }

    handleChange = (event) => {
        this.setState({
           value: event.target.value
        });
     }

    render() {
        return (
            <div>
                <header>
                    <h2>How are you feeling today?</h2>
                </header>
                <div>
                    <input onChange={this.handleChange} type="radio" id="feeling1" name="feeling" value="1"/>
                    <label htmlFor="feeling1">1</label>
                    <input onChange={this.handleChange} type="radio" id="feeling2" name="feeling" value="2"/>
                    <label htmlFor="feeling2">2</label>
                    <input onChange={this.handleChange} type="radio" id="feeling3" name="feeling" value="3" checked/>
                    <label htmlFor="feeling3">3</label>
                    <input onChange={this.handleChange} type="radio" id="feeling4" name="feeling" value="4"/>
                    <label htmlFor="feeling4">4</label>
                    <input onChange={this.handleChange} type="radio" id="feeling5" name="feeling" value="5"/>
                    <label htmlFor="feeling5">5</label>
                    <button onClick={this.handleClick}>NEXT</button>
                    {/* <ToUnderstanding /> */}
                </div>
            </div>   
        );
    }
}

export default withRouter(connect()(Feeling));
