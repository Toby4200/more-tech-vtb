import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';
import axios from 'axios';

export default class VotingList extends Component {
    render() {
        return (
        <div className="voting-list__meetings">
            <h1>Лист Голосования</h1>
            <ExpansionPanel/>
        </div>
        )
    }
}
