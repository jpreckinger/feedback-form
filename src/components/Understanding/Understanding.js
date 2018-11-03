import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

class Understanding extends Component {
    
    state = {
        value: 3
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.history.push('/3');
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
                    <h2>How well are you understanding the content?</h2>
                </header>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input onChange={this.handleChange} type="radio" id="understanding1" name="understanding" value="1"/>
                        <label htmlFor="understanding1">1</label>
                        <input onChange={this.handleChange} type="radio" id="understanding2" name="understanding" value="2"/>
                        <label htmlFor="understanding2">2</label>
                        <input onChange={this.handleChange} type="radio" id="understanding3" name="understanding" value="3" checked/>
                        <label htmlFor="understanding3">3</label>
                        <input onChange={this.handleChange} type="radio" id="understanding4" name="understanding" value="4"/>
                        <label htmlFor="understanding4">4</label>
                        <input onChange={this.handleChange} type="radio" id="understanding5" name="understanding" value="5"/>
                        <label htmlFor="understanding5">5</label>
                        <button type="submit">NEXT</button>
                    </form>
                </div>
            </div>   
        );
    }
}

export default withRouter(connect()(Understanding));
