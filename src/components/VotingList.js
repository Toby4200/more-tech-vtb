
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
        meetType : 'Открытая',
       // active: true

	},
	{
		meeting : 'Обед',
        admin : 'Владимир Раменский',
        meetType : 'Закрытая',
//        active: false
	},
	{
        meeting : 'Планирование развития',
        admin : 'Дмитрий Корчагин',
        meetType : 'Открытая',
  //      active: true
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
          return itemList.map(i => <VotingMeetings status={true} meeting={i.meeting} admin={i.admin} meetType={i.meetType}/>)
        };

        renderVotingMeetingsDisabled = itemList => {
            return itemList.map(i => <VotingMeetings status={false} meeting={i.meeting} admin={i.admin} meetType={i.meetType}/>)
          };

    render() {
        const store = this.store;
        const {title} = this.state;
        return (
            <Container maxWidth="sm">
            <div style={{ 'padding': '15px' }}>
              <Typography variant="h4" gutterBottom>{title}</Typography>
            </div>
            <Divider />
            <div className='meetings-item_container'>
                {this.renderVotingMeetingsActive(List)}
            </div>
            <div className='meetings-item_container'>
                {this.renderVotingMeetingsDisabled(List)}
            </div>
          </Container>
        );
      }
    }
