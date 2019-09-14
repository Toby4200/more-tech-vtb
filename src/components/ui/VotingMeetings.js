import React, { Component } from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import Typography from '@material-ui/core/Typography';
import { string, number, boolean, shape } from 'prop-types';
import axios from 'axios';



export default class VotingList extends Component {
    static propTypes={
        meeting: string,
        admin: string,
        meetType: string,
        status: boolean
    };

    render() {
        return (
        <div className="voting-list__meetings">
            <ExpansionPanel className='voting-list__meetings__item' defaultExpanded='true' disabled={this.props.status}>
                <Typography className='item-name_first'>{this.props.meeting}</Typography>
                <Typography className='item-name_second'>{this.props.admin}</Typography>
                <Typography className='item-name_third'>{this.props.meetType}</Typography>
            </ExpansionPanel>
        </div>
        )
    }
}
