import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';

class Supported extends Component {

    state = {
        value: 0
    }

    // this method will activiate on click of the next button,
    // and will prevent the user from moving on without making a selection
    // and if conditions are met, will dispatch their selection to redux and
    // move them to the next page via the history prop.
    handleSubmit = (event) => {
        event.preventDefault();
        if( this.state.value === 0 ){
            alert('Gotta click one of those buttons...');
        } else {
            this.props.history.push('/4');
            this.props.dispatch( { type: 'SET_FEEDBACK', payload: Number(this.state.value) } );
        }
    }

    // This method sets state equal to the value of the radio button selected
    handleChange = (event) => {
        this.setState({
           value: event.target.value
        });
     }

    render() {
        return (
            <Card id="background">
                <CardContent>
                    <h2>How well are you being supported?</h2>
                    <form onSubmit={this.handleSubmit}>
                        <Radio onChange={this.handleChange} 
                        checked={this.state.value === '1'} name="supported" value="1"/>
                        <label htmlFor="supported1">1</label>
                        <Radio onChange={this.handleChange} 
                        checked={this.state.value === '2'} name="supported" value="2"/>
                        <label htmlFor="supported2">2</label>
                        <Radio onChange={this.handleChange} 
                        checked={this.state.value === '3'} name="supported" value="3"/>
                        <label htmlFor="supported3">3</label>
                        <Radio onChange={this.handleChange} 
                        checked={this.state.value === '4'} name="supported" value="4"/>
                        <label htmlFor="supported4">4</label>
                        <Radio onChange={this.handleChange} 
                        checked={this.state.value === '5'} name="supported" value="5"/>
                        <label htmlFor="supported5">5</label>
                        <Button type="submit">NEXT</Button>
                    </form>
                </CardContent>
            </Card>   
        );
    }
}

export default withRouter(connect()(Supported));

