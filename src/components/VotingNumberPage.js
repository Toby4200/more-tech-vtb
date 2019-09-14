import React, { Component } from 'react';
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Container from "@material-ui/core/Container";

export default class VotingNumberPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'Страница голосования '
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
