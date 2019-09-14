import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

export default class CreateVoting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'Обсуждение смены офиса'
    };
  }

  render() {
    const { title } = this.state;

    return (
      <Container maxWidth="sm">
        <div style={{ 'padding': '15px' }}>
          <Typography variant="h4" gutterBottom>{title}</Typography>
        </div>
        <Divider />
      </Container>
    );
  }
}