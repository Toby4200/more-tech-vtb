
import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography'
import VotingMeetings from './ui/VotingMeetings'
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';
import axios from 'axios';

const List = [
    {
		meeting : 'Согласование переезда',
        admin : 'Владимир Раменский',
        meetType : 'Бессрочная',
        closed: false,
        id: '1',
        dateOfBegin: '21 - 09 - 2019 13:48',
        dateOfEnd: '22 - 09 - 2019 13:40',
        status: 'В работе'


	},
	{
		meeting : 'Удалить сайт новостроек',
        admin : 'Владимир Раменский',
        meetType : 'Бессрочная',
        closed: true,
        id: '2',
        dateOfBegin: '20 - 09 - 2019 12:39',
        dateOfEnd: '20 - 09 - 2019 13:40',
        status: 'Согласовано'
	},
	{
		meeting : 'Обед',
        admin : 'Владимир Раменский',
        meetType : 'Срочная',
        closed: false,
        id: '3',
        dateOfBegin:'19 - 09 - 2019 21:39',
        dateOfEnd: '19 - 09 - 2019 22:00',
        status: 'В работе'
	},
	{
        meeting : 'Планирование развития',
        admin : 'Дмитрий Корчагин',
        meetType : 'Бессрочная',
        closed: true,
        id: '4',
        dateOfBegin: '18 - 09 - 2019 20:39',
        dateOfEnd: '18 - 09 - 2019 23:40',
        status: 'Несогласовано'
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
                {this.renderVotingMeetingsActive(List)}
            </div>
          </Container>
        );
      }
    }
