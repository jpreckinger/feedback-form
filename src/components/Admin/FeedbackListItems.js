import React, { Component } from 'react';
import './Admin.css';
import axios from 'axios';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'; 
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import DeleteForeverTwoToneIcon from '@material-ui/icons/DeleteForeverTwoTone';



class FeedbackListItems extends Component {

    // This deletes a row of feedback from the database when the trashicon is clicked 
    deleteFeedback = (id) => {
        axios.delete(`/feedback/${id}`)
        .then( (response) => {
            this.props.getFeedback();
        })
        .catch( (error) => {
            alert('Oops. There was an issue deleting feedback...')
        })
    }

    // This method checks to make sure the user is intending to delete.
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
                <TableRow>
                    <TableCell>{this.props.feedback.feeling}</TableCell>
                    <TableCell>{this.props.feedback.understanding}</TableCell>
                    <TableCell>{this.props.feedback.support}</TableCell>
                    <TableCell>{this.props.feedback.comments}</TableCell>
                    <TableCell><button onClick={this.submit}><DeleteForeverTwoToneIcon/></button></TableCell>
                </TableRow>
        );
    }
}

export default FeedbackListItems;
