import React, { Component } from 'react';
import './Admin.css';
import axios from 'axios';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'; 

class Admin extends Component {

    deleteFeedback = (id) => {
        axios.delete(`/feedback/${id}`)
        .then( (response) => {
            this.props.getFeedback();
        })
        .catch( (error) => {
            alert('Oops. There was an issue deleting feedback...')
        })
    }

    submit = () => {
        confirmAlert({
          title: 'Confirm delete',
          message: 'Are you sure you want to delete this?',
          buttons: [
            {
              label: 'Yes, quite.',
              onClick: () => this.deleteFeedback(this.props.feedback.id)
            },
            {
              label: 'On second thought...',
              onClick: () => alert('Your feedback is safe...for now')
            }
          ]
        })
      };

    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <td>Feeling</td>
                        <td>Comprehension</td>
                        <td>Support</td>
                        <td>Comments</td>
                        <td>Delete</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{this.props.feedback.feeling}</td>
                        <td>{this.props.feedback.understanding}</td>
                        <td>{this.props.feedback.support}</td>
                        <td>{this.props.feedback.comments}</td>
                        <td><button onClick={this.submit}>
                            Delete
                        </button></td>
                    </tr>
                </tbody>
            </table>
               
        );
    }
}

export default Admin;
