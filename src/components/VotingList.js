
import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography'
import VotingMeetings from './ui/VotingMeetings'
import {VOITING_IST_FULL} from '../../src/pages/VotingPage'
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';
import axios from 'axios';



export default class VotingList extends Component {
    constructor(props) {
        super(props);

        this.state = {
          title: 'Список голосований'
        };
      }
           renderVotingMeetingsActive = itemList => {
          return itemList
            .sort(i => i.closed ? 1 : -1)
            .map(i => <VotingMeetings status={i.status} closed={i.closed} meeting={i.meeting} admin={i.admin} meetType={i.meetType} id={i.id} dateOfBegin={i.dateOfBegin} dateOfEnd={i.dateOfEnd}/>)
        };

    render() {
        const store = this.store;
        const {title} = this.state;
        return (
            <Container maxWidth="sm">
            <div style={{'padding': '50px 0 15px 15px'}}>
              <Typography variant="h4" gutterBottom>{title}</Typography>
            </div>
            <div className='meetings-item_container'>
                {this.renderVotingMeetingsActive(VOITING_IST_FULL)}
            </div>
          </Container>
        );
      }
    }
