
import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import VotingMeetings from './ui/VotingMeetings'
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';
import axios from 'axios';

const List = [
    {
		meeting : 'Согласование переезда',
        admin : 'Владимир Раменский',
        meetType : 'С таймером',
        closed: false

	},
	{
		meeting : 'Согласование переезда',
        admin : 'Владимир Раменский',
        meetType : 'С таймером',
        closed: true

	},
	{
		meeting : 'Обед',
        admin : 'Владимир Раменский',
        meetType : 'Без таймера',
        closed: false
	},
	{
        meeting : 'Планирование развития',
        admin : 'Дмитрий Корчагин',
        meetType : 'С таймером',
        closed: true
	}

];

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
            .map(i => <VotingMeetings closed={i.closed} meeting={i.meeting} admin={i.admin} meetType={i.meetType}/>)
        };

    render() {
        const store = this.store;
        const {title} = this.state;
        return (
            <Container maxWidth="sm">
            <div style={{'padding': '15px 0 15px 0'}}>
              <Typography variant="h4" gutterBottom>{title}</Typography>
            </div>
            <Divider />
            <div className='meetings-item_container'>
                {this.renderVotingMeetingsActive(List)}
            </div>
          </Container>
        );
      }
    }
