import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import FeedbackListItems from './FeedbackListItems';
import axios from 'axios';

class Admin extends Component {

    state = {
        feedback: []
    }

    getFeedback = () => {
        axios.get('/feedback')
        .then( (response) => {
            this.setState({ feedback: response.data })
            console.log(this.state.feedback);
        })
        .catch((error) => {
            alert('Oops. There was an issue receiving feedback...')
        })
    }

    componentDidMount() {
        this.getFeedback();
    }

    render() {
        return (
            <div>
                <header>
                    <h1>Feedback Results</h1>
                </header>  
                <div>
                    {
                        this.state.feedback.map( feedback => 
                            <div key={feedback.id}>
                                <FeedbackListItems feedback={feedback} 
                                getFeedback={this.getFeedback} />
                            </div>
                    )}
                </div>
            </div>   
        );
    }
}

export default withRouter(Admin);
