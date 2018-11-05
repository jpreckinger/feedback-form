import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

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
            <Card id="background">
                <CardContent>
                    <h2>Any comments you want to leave?</h2>
                    <form onSubmit={this.handleSubmit}>
                        <TextField type="text" value={this.state.comment} 
                        onChange={this.handleChange}/>
                        <br/>
                        <Button type="submit">Submit</Button>
                    </form>
                </CardContent>
            </Card>   
    );
  }
}

const mapStateToProps = (reduxState) => ({reduxState});

export default withRouter(connect(mapStateToProps)(Comments));
