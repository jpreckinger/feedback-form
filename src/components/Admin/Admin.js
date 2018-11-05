import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import FeedbackListItems from './FeedbackListItems';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing.unit * 3,
      overflowX: 'auto',
    },
    table: {
      minWidth: 700,
    },
  });

class Admin extends Component {

    state = {
        feedback: []
    }

    // This method will request the data from the database and set state to the data
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

    // This runs on render, and grabs the data again from the database.
    componentDidMount() {
        this.getFeedback();
    }

    render() {
        return (
            <div>
                <header>
                    <h1>Feedback Results</h1>
                </header>  
                <Paper>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Feeling</TableCell>
                                <TableCell>Comprehension</TableCell>
                                <TableCell>Support</TableCell>
                                <TableCell>Comments</TableCell>
                                <TableCell>Delete</TableCell>
                            </TableRow>
                        </TableHead>
                            {this.state.feedback.map( feedback => 
                            <TableBody key={feedback.id}>
                                <FeedbackListItems feedback={feedback} 
                                getFeedback={this.getFeedback} />
                            </TableBody>
                            )}
                    </Table>    
                </Paper>
            </div>   
        );
    }
}

export default withRouter(withStyles(styles)(Admin));
