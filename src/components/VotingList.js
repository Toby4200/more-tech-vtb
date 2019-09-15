import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography'
import VotingMeetings from './ui/VotingMeetings'
import {VOITING_IST_FULL} from '../../src/pages/VotingPage'
import {Link, push} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import votingsStore from '../stores/votings';
import userStore from '../stores/user';
import { observer } from 'mobx-react';

@observer
export default class VotingList extends Component {
    constructor(props) {
        super(props);

        this.state = {
          title: 'Список голосований'
        };
      }
           renderVotingMeetingsActive = () => {
          const { history } = this.props;
          return votingsStore.votingList
            .sort(voting => voting.closed ? 1 : -1)
            .map(voting => <VotingMeetings
                        history={history}
                        status={voting.status}
                        closed={voting.closed}
                        title={voting.title}
                        creator={voting.creator}
                        type={voting.type}
                        id={voting.id}
                        createdTime={voting.createdTime}
                        closedTime={voting.closedTime}/>)
        };

        componentDidMount() {
          votingsStore.getList().then();
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
        const {title} = this.state;
        const { role } = userStore;
        return (
            <Container maxWidth="sm">
            <div style={{'padding': '50px 0 15px 15px'}}>
              <Typography variant="h4" gutterBottom>{title}</Typography>
            </div>
            <div className='meetings-item_container'>
                {this.renderVotingMeetingsActive(VOITING_IST_FULL)}
                {this.renderNewVoteButton(role)}
            </div>
          </Container>
        );
      }
    }
