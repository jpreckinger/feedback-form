import React, { Component } from 'react';
import './Admin.css';

class Admin extends Component {

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
                        <td><button>Delete</button></td>
                    </tr>
                </tbody>
            </table>
               
        );
    }
}

export default Admin;
