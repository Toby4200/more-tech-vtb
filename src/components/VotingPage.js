import React, { Component } from 'react';
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Container from "@material-ui/core/Container";

// То, что придет с бэка как ответ на voiting/:id
const VOITING_ITEM = {
  title: 'Переезд в новый офис',
  description: 'Мы хотим переехать в новый офис. Наш текущий офис начинает заканчиваться ' +
    'нам необходимо большее пространство. Так же хочется выглядеть более презентабильно в целом ' +
    'перед нашими заказчиками. А так же повысить комфорт для своей команды. Так же хочется ' +
    'чтобы можно было приглашать людей для знакомства в наш офис - в нем должно быть комфортно ',
};


export default class VotingPage extends Component {
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

          <Typography variant="h1" gutterBottom>{VOITING_ITEM.title}</Typography>

          <Typography variant="h4" gutterBottom>{VOITING_ITEM.description}</Typography>

        </div>
        <Divider />
      </Container>
    );
  }
}
