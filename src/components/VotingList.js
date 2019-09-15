import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography'
import VotingMeetings from './ui/VotingMeetings'
import {VOITING_IST_FULL} from '../../src/pages/VotingPage'
import {Link, push} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import votingsStore from '../stores/votings';
import { observer } from 'mobx-react';

let userRole = 'admin';

@observer
export default class VotingList extends Component {
    constructor(props) {
        super(props);

        this.state = {
          title: 'Список голосований'
        };
      }
           renderVotingMeetingsActive = () => {
          return votingsStore.votingList
            .sort(i => i.closed ? 1 : -1)
            .map(i => <VotingMeetings 
                        status={i.status} 
                        closed={i.closed} 
                        meeting={i.meeting} 
                        admin={i.admin} 
                        meetType={i.meetType} 
                        id={i.id}
                        dateOfBegin={i.dateOfBegin} 
                        dateOfEnd={i.dateOfEnd}/>)
        };

        componentDidMount() {
          votingsStore.getVotings().then();
        }

  renderNewVoteButton = (role) => {
            const { history } = this.props;
            if (role === 'admin'){
                return(
                    <Button
                      onClick={() => history.push(`/create-voting`)}
                      className='new-vote'
                      variant='contained'
                      color='primary'
                    >
                      Создать новое голосование
                    </Button>
                )
            }
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
                {this.renderNewVoteButton(userRole)}
            </div>
          </Container>
        );
      }
    }
