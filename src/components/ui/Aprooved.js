import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types'
import lodash from 'lodash';


export default class Aprooved extends Component {
  static propTypes= {
    creator: PropTypes.string,
    createdTime: PropTypes.string,
    closedTime: PropTypes.string

  }
    render(){
      const {
         creator,
         createdTime,
         closedTime

      } = this.props;

      const name = lodash.get(creator, ['name'], '');
     

      return (
          <React.Fragment>
            <Card className='aprooved_card'>
              <div className='vote-result-title'>
              <Typography variant="h4" gutterBottom>Согласовано!</Typography>
              </div>
              <div className='vote-result-info'>
              <tr>
                <th scope='row'>
                  <Typography variant="subtitle1" gutterBottom>Создатель: </Typography>
                </th>
                <td>
                {name}
                </td>
              </tr>
              <tr>
                <th scope='row'>
                  <Typography variant="subtitle1" gutterBottom>Дата начала: </Typography>
                </th>
                <td>
                {createdTime}
                </td>
              </tr>
              <tr>
                <th scope='row'>
                  <Typography variant="subtitle1" gutterBottom>Дата завершения: </Typography>
                </th>
                <td>
                  {closedTime}
                </td>
              </tr>
              </div>
            </Card>
          </React.Fragment>
      );
  }
}