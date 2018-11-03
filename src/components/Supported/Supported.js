import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

class Supported extends Component {

    state = {
        value: 3
    }

    handleClick = () => {
        this.props.history.push('/4');
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
                    <h2>How well are you being supported?</h2>
                </header>
                <div>
                    <input onChange={this.handleChange} type="radio" id="supported1" name="supported" value="1"/>
                    <label htmlFor="supported1">1</label>
                    <input onChange={this.handleChange} type="radio" id="supported2" name="supported" value="2"/>
                    <label htmlFor="supported2">2</label>
                    <input onChange={this.handleChange} type="radio" id="supported3" name="supported" value="3" checked/>
                    <label htmlFor="supported3">3</label>
                    <input onChange={this.handleChange} type="radio" id="supported4" name="supported" value="4"/>
                    <label htmlFor="supported4">4</label>
                    <input onChange={this.handleChange} type="radio" id="supported5" name="supported" value="5"/>
                    <label htmlFor="supported5">5</label>
                    <button onClick={this.handleClick}>NEXT</button>
                </div>
            </div>   
        );
    }
}

export default withRouter(connect()(Supported));

