import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

class Comments extends Component {

    state = {
        comment: ''
    }

    handleChange = (event) => {
        this.setState({
            ...this.state,
            comment: event.target.value
          })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.history.push('/5');
        this.props.dispatch( { type: 'SET_FEEDBACK', payload: this.state.comment });
    }

    render() {
        return (
            <div>
                <header>
                    <h2>Any comments you want to leave?</h2>
                </header>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <label>Comments:</label>
                        <input type="text" value={this.state.comment} 
                        onChange={this.handleChange}/>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>   
    );
  }
}

export default withRouter(connect()(Comments));
