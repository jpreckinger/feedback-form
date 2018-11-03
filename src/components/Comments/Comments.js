import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';

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
        this.addNewFeedback();
    }

    addNewFeedback = () => {
        let feedback = [...this.props.reduxState.feedbackReducer, this.state.comment]
        axios({
            method: 'POST',
            url: '/feedback',
            data: feedback
        })
        .then( () => {
            this.props.dispatch( { type: 'RESET_STATE' } );
        })
        .catch( () => {
            alert('Error submitting feedback');
        })
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

const mapStateToProps = (reduxState) => ({reduxState});

export default withRouter(connect(mapStateToProps)(Comments));
