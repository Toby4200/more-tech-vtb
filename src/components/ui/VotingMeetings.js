import React, { Component } from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Edit from '@material-ui/icons/Edit';
import Delete from '@material-ui/icons/Delete';
import Fab from '@material-ui/core/Fab';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';



export default class VotingList extends Component {
    static propTypes={
        meeting: PropTypes.string,
        admin: PropTypes.string,
        meetType: PropTypes.string,
        closed: PropTypes.boolean,
        id: PropTypes.number,
        dateOfBegin: PropTypes.string,
        status: PropTypes.string
    };

    renderDateOfEnd = (date) => {
        if (this.props.closed || this.props.meetType=='Срочная'){
        return(
            <React.Fragment>
                <Typography className={'meeting-item_fivth'}>Дата окончания: </Typography>date
            </React.Fragment>)
        }
    }
    render() {
        const isDateOfEndRender = this.props.closed || this.props.meetType=='Срочная';
        return (
        <div className="voting-list__meetings">
            <ExpansionPanel className='voting-list__meetings' defaultExpanded='true' disabled={this.props.closed}>
                <div className='item_list'>
                        <Typography className='meeting-item_first'><h1>{this.props.meeting}</h1></Typography>
                    <tr>
                        <th scope='row'><Typography className='meeting-item_second'>Организатор: </Typography></th><td>{this.props.admin} <br/></td>
                    </tr>
                    <tr>
                        <th scope='row'><Typography className='meeting-item_third'>Тип голосования: </Typography></th><td>{this.props.meetType}<br/></td>
                    </tr>
                    <tr>
                        <th scope='row'><Typography className='meeting-item_fourth'>Дата начала: </Typography></th><td>{this.props.dateOfBegin} <br/></td>
                    </tr>
                        {isDateOfEndRender && (<tr><th scope='row'><Typography className={'meeting-item_fivth'}>Дата окончания: </Typography></th><td>{this.props.dateOfEnd}<br/></td></tr>)}
                    <tr>
                        <th scope='row'><Typography className='meeting-item_sixth'>Статус: </Typography></th><td>{this.props.status}</td>
                    </tr>

                </div>
                <div className='meeting-card_top'>
                <a className='voting-entrance'>
                        <Button variant="contained">
                            <Link to={`/voting/${this.props.id}`}>
                            Подробнее
                            </Link>
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
