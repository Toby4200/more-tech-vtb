import React, { Component } from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Edit from '@material-ui/icons/Edit';
import Delete from '@material-ui/icons/Delete';
import Fab from '@material-ui/core/Fab';
import PropTypes from 'prop-types';
import axios from 'axios';



export default class VotingList extends Component {
    static propTypes={
        meeting: PropTypes.string,
        admin: PropTypes.string,
        meetType: PropTypes.string,
        closed: undefined
    };

    render() {
        return (
        <div className="voting-list__meetings">
            <ExpansionPanel className='voting-list__meetings' defaultExpanded='true' disabled={this.props.closed}>
                <div className='item_list'>
                    <Typography className='meeting-item_first'><h1>{this.props.meeting}</h1></Typography>
                    <Typography className='meeting-item_second'>Организатор: </Typography>{this.props.admin} <br/>
                    <Typography className='meeting-item_third'>Тип голосования: </Typography>{this.props.meetType}
                </div>
                <div className='meeting-card_top'>
                <a className='voting-entrance'>
                        <Button variant="contained">
                            Подробнее
                        </Button>
                    </a>
                    <div className='item-edit'>
                        <Fab className='voting-meeting_change-button' disabled={this.props.closed} color="secondary" aria-label="edit" style={{'marginRight':'15px'}}>
                            <Edit className='change-button_icon'/>
                        </Fab>
                        <Fab className='voting-meeting_change-button' disabled={this.props.closed} aria-label="delete">
                            <Delete className='change-button_icon'/>
                        </Fab>
                    </div>
                </div>
            </ExpansionPanel>
        </div>
        )
    }
}
