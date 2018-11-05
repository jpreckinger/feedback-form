import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';


class Thanks extends Component {

  //This moves the user to the front page when the button is clicked.
  handleClick = () => {
    this.props.history.push('/');
  }

  render() {
    return (
      <Card id="background">
          <CardContent>
            <h1>Thank you!</h1>
            <Button onClick={this.handleClick}>Leave New Feedback</Button> 
          </CardContent>      
      </Card>   
    );
  }
}

export default withRouter(Thanks);
