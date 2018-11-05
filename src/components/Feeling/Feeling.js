import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';



class Feeling extends Component {

    state = {
        value: 0
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if( this.state.value === 0 ){
            alert('Gotta click one of those buttons...');
        } else {
            this.props.history.push('/2');
            this.props.dispatch( { type: 'SET_FEEDBACK', payload: Number(this.state.value) } );
        }
    }

    handleChange = (event) => {
        this.setState({
           value: event.target.value
        });
     }

    render() {
        return (
            <Card id="background">
                <CardContent>
                        <h2>How are you feeling today?</h2>
                        <form onSubmit={this.handleSubmit}>
                            <Radio onChange={this.handleChange} 
                            checked={this.state.value === '1'} name="feeling" value="1"/>
                            <label htmlFor="feeling1">1</label>
                            <Radio onChange={this.handleChange} 
                            checked={this.state.value === '2'} name="feeling" value="2"/>
                            <label htmlFor="feeling2">2</label>
                            <Radio onChange={this.handleChange} 
                            checked={this.state.value === '3'} name="feeling" value="3"/>
                            <label htmlFor="feeling3">3</label>
                            <Radio onChange={this.handleChange} 
                            checked={this.state.value === '4'} name="feeling" value="4"/>
                            <label htmlFor="feeling4">4</label>
                            <Radio onChange={this.handleChange} 
                            checked={this.state.value === '5'} name="feeling" value="5"/>
                            <label htmlFor="feeling5">5</label>
                            <Button type="submit">NEXT</Button>
                        </form>
                </CardContent>
            </Card>   
        );
    }
}

export default withRouter(connect()(Feeling));
