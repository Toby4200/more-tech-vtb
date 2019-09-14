import React, { Component } from 'react';
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Container from "@material-ui/core/Container";

import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';

// То, что придет с бэка как ответ на voiting/:id
const VOITING_ITEM = {
  title: 'Переезд в новый офис',
  description: 'Мы хотим переехать в новый офис. Наш текущий офис начинает заканчиваться ' +
    'нам необходимо большее пространство. Так же хочется выглядеть более презентабильно в целом ' +
    'перед нашими заказчиками. А так же повысить комфорт для своей команды. Так же хочется ' +
    'чтобы можно было приглашать людей для знакомства в наш офис - в нем должно быть комфортно ',
  points: [
    {
      title: 'Заказать кофе машину',
      links: [
        {
          lintText: 'кофе-машина.pdf',
          linkHref: 'https://material-ui.com/api/divider/'
        },
        {
          lintText: 'монитор.pdf',
          linkHref: 'https://material-ui.com/api/divider/'
        },

        {
          lintText: 'стул.pdf',
          linkHref: 'https://material-ui.com/api/divider/'
        },
      ]
    },
    {
      title: 'Купить мониторы',
      links: [
        {
          lintText: 'кофе-машина.pdf',
          linkHref: 'https://material-ui.com/api/divider/'
        },
        {
          lintText: 'монитор.pdf',
          linkHref: 'https://material-ui.com/api/divider/'
        },

        {
          lintText: 'стул.pdf',
          linkHref: 'https://material-ui.com/api/divider/'
        },


      ]
    },
    {
      title: 'Заказать стулья',
      links: [
        {
          lintText: 'кофе-машина.pdf',
          linkHref: 'https://material-ui.com/api/divider/'
        },
        {
          lintText: 'монитор.pdf',
          linkHref: 'https://material-ui.com/api/divider/'
        },

        {
          lintText: 'стул.pdf',
          linkHref: 'https://material-ui.com/api/divider/'
        },


      ]
    },
    {
      title: 'Заказать массажистку',
      links: [
        {
          lintText: 'кофе-машина.pdf',
          linkHref: 'https://material-ui.com/api/divider/'
        },
        {
          lintText: 'монитор.pdf',
          linkHref: 'https://material-ui.com/api/divider/'
        },

        {
          lintText: 'стул.pdf',
          linkHref: 'https://material-ui.com/api/divider/'
        },


      ]
    },

  ]
};


/*
title: '',
  description: '',
  newPoint: {
  title: ''
},
points: [
  {
    title: 'Пункт 1',
    links: []
  },
  {
    title: 'Пункт 2',
    links: []
  }
]
*/


export default class VotingPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'Страница голосования'
    };
  }

  renderPoints = () => {
    const {
      points = []
    } = VOITING_ITEM;

    const listItems = points.map((point) => {
      const {
        title
      } = point;

      return (
        <ListItem button>
          {/*<ListItemIcon>*/}
          {/*  <SendIcon />*/}
          {/*</ListItemIcon>*/}
          <ListItemText primary={ title } />
        </ListItem>

      )
    })

    return listItems;
  }

  render() {
    // const { title } = this.state;

    return (
      <Container maxWidth="lg" className="voting">
        <div className="voting__container">

          <Typography variant="h1" gutterBottom className="voting__title">{VOITING_ITEM.title}</Typography>

          <Typography variant="h4" gutterBottom className="voting__description">{VOITING_ITEM.description}</Typography>

          <Divider variant="fullWidth" />

          <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                Список пунктов для согласования
              </ListSubheader>
            }
            className="points"
          >
            {
              this.renderPoints()
            }
            <ListItem button>
              {/*<ListItemIcon>*/}
              {/*  <SendIcon />*/}
              {/*</ListItemIcon>*/}
              <ListItemText primary="Sent mail" />
            </ListItem>

            {/*<Collapse in={open} timeout="auto" unmountOnExit>*/}
            {/*  <List component="div" disablePadding>*/}
            {/*    <ListItem button className="class"*/}
            {/*    >*/}
            {/*      <ListItemIcon>*/}
            {/*        <StarBorder />*/}
            {/*      </ListItemIcon>*/}
            {/*      <ListItemText primary="Starred" />*/}
            {/*    </ListItem>*/}
            {/*  </List>*/}
            {/*</Collapse>*/}
          </List>

        </div>
      </Container>
    );
  }
}
