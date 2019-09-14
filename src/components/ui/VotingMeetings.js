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
                <div className='voting-list__meetings meeting-card_top'>
                    <div className='item_list'>
                        <Typography className='item-name_first'><h1>{this.props.meeting}</h1></Typography>
                        <Typography className='item-name_second'>Организатор: {this.props.admin}</Typography>
                        <Typography className='item-name_third'>Тип голосования: {this.props.meetType}</Typography>
                    </div>
                    <div className='item-edit'>
                        <Fab disabled={this.props.closed} color="secondary" aria-label="edit" style={{'marginBottom':'15px'}}>
                            <Edit />
                        </Fab>
                        <Fab disabled={this.props.closed} aria-label="delete">
                            <Delete />
                        </Fab>
                    </div>
                </div>
                <a className='voting'>
                        <Button variant="contained">
                            Подробнее
                        </Button>
                </a>
            </ExpansionPanel>
        </div>
        )
    }
}
