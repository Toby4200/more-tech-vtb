import React, { Component } from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Edit from '@material-ui/icons/Edit';
import Delete from '@material-ui/icons/Delete';
import Fab from '@material-ui/core/Fab';
import {Link, push} from 'react-router-dom';

export default class VotingList extends Component {

    handleBtnClick = (id) => () => {
        const { history } = this.props;
        history.push(`/voting/${id}`);
    };

    render() {
        const {
            closed,
            type,
            title,
            creator,
            createdTime,
            closedTime,
            status,
            id
        } = this.props;
        const isDateOfEndRender = closed || type === 'Срочная';
        return (
        <div className="voting-list__meetings">
            <ExpansionPanel className='voting-list__meetings' defaultExpanded='true' disabled={closed}>
                <div className='item_list'>
                        <Typography className='meeting-item_first'><h1>{title}</h1></Typography>
                    <tr>
                        <th scope='row'><Typography className='meeting-item_second'>Организатор: </Typography></th><td>{creator.name} <br/></td>
                    </tr>
                    <tr>
                        <th scope='row'><Typography className='meeting-item_third'>Тип голосования: </Typography></th><td>{type}<br/></td>
                    </tr>
                    <tr>
                        <th scope='row'><Typography className='meeting-item_fourth'>Дата начала: </Typography></th><td>{createdTime} <br/></td>
                    </tr>
                        {isDateOfEndRender && (<tr><th scope='row'><Typography className={'meeting-item_fivth'}>Дата окончания: </Typography></th><td>{closedTime}<br/></td></tr>)}
                    <tr>
                        <th scope='row'><Typography className='meeting-item_sixth'>Статус: </Typography></th><td>{status}</td>
                    </tr>

                </div>
                <div className='meeting-card_top'>
                <a className='voting-entrance'>
                        <Button onClick={ this.handleBtnClick(id) } variant='contained'>
                            Подробнее
                        </Button>
                    </a>
                    <div className='item-edit'>
                        <Fab className='voting-meeting_change-button' disabled={closed} color="secondary" aria-label="edit" style={{'marginRight':'15px'}}>
                            <Edit className='change-button_icon'/>
                        </Fab>
                        <Fab className='voting-meeting_change-button' disabled={closed} aria-label="delete">
                            <Delete className='change-button_icon'/>
                        </Fab>
                    </div>
                </div>
            </ExpansionPanel>
        </div>
        )
    }
}
