import React, { Component } from 'react';
import Typography from "@material-ui/core/Typography";
// import Divider from "@material-ui/core/Divider";
import Container from "@material-ui/core/Container";

import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// import Collapse from '@material-ui/core/Collapse';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import ListItemAvatar from '@material-ui/core/ListItemAvatar'

import Link from '@material-ui/core/Link';

import Countdown from 'react-countdown-now';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import ImageIcon from '@material-ui/icons/Image';

// card
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import VotingChat from '../components/VotingChat';

const VOITING_LIST_FULL = [
  {
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
            text: 'кофе-машина.pdf',
            url: 'https://material-ui.com/api/divider/'
          },
          {
            title: 'монитор.pdf',
            url: 'https://material-ui.com/api/divider/'
          },

          {
            title: 'стул.pdf',
            url: 'https://material-ui.com/api/divider/'
          },
        ]
      },
      {
        title: 'Купить мониторы',
        links: [
          {
            title: 'кофе-машина.pdf',
            url: 'https://material-ui.com/api/divider/'
          },
        ]
      },
      {
        title: 'Заказать стулья',
        links: [
          {
            title: 'кофе-машина.pdf',
            url: 'https://material-ui.com/api/divider/'
          },
        ]
      },
      {
        title: 'Заказать массажистку',
        links: [
          {
            title: 'монитор.pdf',
            url: 'https://material-ui.com/api/divider/'
          },

          {
            title: 'стул.pdf',
            url: 'https://material-ui.com/api/divider/'
          },
        ]
      },
    ],
    admin : 'Владимир Раменский',
    // был meetType
    // withTimeBounds
    // withoutTimeBounds
    type : 'Бессрочная',
    closed: false,
    id: '1',
    // dateOfBegin: '21 - 09 - 2019 13:48',
    createdTime: '21 - 09 - 2019 13:48',
    // dateOfEnd: '22 - 09 - 2019 13:40',
    closedTime: '22 - 09 - 2019 13:40',
    status: 'В работе'
  },
  {
    meeting : 'Удалить сайт новостроек',
    admin : 'Владимир Раменский',
    meetType : 'Бессрочная',
    closed: true,
    id: '2',
    dateOfBegin: '20 - 09 - 2019 12:39',
    dateOfEnd: '20 - 09 - 2019 13:40',
    status: 'Согласовано'
  },
  {
    meeting : 'Обед',
    admin : 'Владимир Раменский',
    meetType : 'Срочная',
    closed: false,
    id: '3',
    dateOfBegin:'19 - 09 - 2019 21:39',
    dateOfEnd: '19 - 09 - 2019 22:00',
    status: 'В работе'
  },
  {
    meeting : 'Планирование развития',
    admin : 'Дмитрий Корчагин',
    meetType : 'Бессрочная',
    closed: true,
    id: '4',
    dateOfBegin: '18 - 09 - 2019 20:39',
    dateOfEnd: '18 - 09 - 2019 23:40',
    status: 'Несогласовано'
  }
];

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
          title: 'кофе-машина.pdf',
          url: 'https://material-ui.com/api/divider/'
        },
        {
          title: 'монитор.pdf',
          url: 'https://material-ui.com/api/divider/'
        },

        {
          title: 'стул.pdf',
          url: 'https://material-ui.com/api/divider/'
        },
      ]
    },
    {
      title: 'Купить мониторы',
      links: [
        {
          title: 'кофе-машина.pdf',
          url: 'https://material-ui.com/api/divider/'
        },
      ]
    },
    {
      title: 'Заказать стулья',
      links: [
        {
          title: 'кофе-машина.pdf',
          url: 'https://material-ui.com/api/divider/'
        },
      ]
    },
    {
      title: 'Заказать массажистку',
      links: [
        {
          title: 'монитор.pdf',
          url: 'https://material-ui.com/api/divider/'
        },

        {
          title: 'стул.pdf',
          url: 'https://material-ui.com/api/divider/'
        },
      ]
    },

  ]
};

const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    return <div className="timer_done">Встреча окончена</div>;
  } else {
    return (<div className="timer">
      <div className="timer__icon">
        <HourglassEmptyIcon/>
      </div>

      <div className="timer__countdown-container">
        {
          hours ? <span className="timer__item timer__hours">{hours} <span className="timer__word">ч</span> : </span> : ''
        }
        {
          minutes ? <span className="timer__item timer__minutes">{minutes} <span className="timer__word">мин</span> : </span> : ''
        }
        {
          seconds ? <span className="timer__item timer__seconds">{seconds} <span className="timer__word">сек</span></span> : ''
        }
      </div>
    </div>);
  }
};

export default class VotingPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'Страница голосования'
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params

    console.log('id', id)
  }

  renderPoints = () => {
    const {
      points = []
    } = VOITING_LIST_FULL;

    const listItems = points.map((point) => {
      const {
        title,
        links = []
      } = point;

      return (
        <div>
          <ListItem>
            <ListItemText
              primary={ title }
            />
          </ListItem>

          <List
            component="div"
            disablePadding
            className="link"
          >
            {
              this.renderLinks(links)
            }
          </List>

        </div>
      )
    })

    return listItems;
  }

  renderLinks = (links) => {
    const renderLinks = links.map((link) => {
      const {
        title,
        url,
      } = link;

      return (
        <ListItem className="link__item" >
          <Chip
            label={ title }
            className="class"
            clickable
            href={ url }
            component="a"
          >
          </Chip>
        </ListItem>
      )
    });

    return renderLinks;
  }

  renderTimer = () => {

    return (
      <Countdown
        date={Date.now() + 50000}
        renderer={renderer}
      />
    )
  }

  renderParticipants = () => {
    const participants = [1,2,3,4].map(() => {
      return (
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <ImageIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Photos" secondary="Jan 9, 2014" />
        </ListItem>
      )
    });

    return participants;
  }

  render() {

    return (
      <Container maxWidth="lg" className="voting">
        <div className="voting__container">

          <div className="voting__left-container">
            {/* А это выключается когда встреча завершается */}
            <div className="voting__header voting-header">

              <div className="status">
                <span className="status__title">Статус | </span>
                <span className="status__description">in progress</span>
              </div>

              {
                this.renderTimer()
              }
            </div>

            <div className="divider"></div>

            {/* Тут будет плашка */}

            <Typography variant="h1" gutterBottom className="voting__title">{VOITING_ITEM.title}</Typography>

            <Typography variant="h4" gutterBottom className="voting__description">Описание</Typography>
            <div variant="h4"className="voting__description-text">{VOITING_ITEM.description}</div>

            <List
              component="nav"
              aria-labelledby="nested-list-subheader"
              className="points"
            >
              <span className="points__title">Список пунктов для согласования</span>
              {
                this.renderPoints()
              }
            </List>

          </div>

          <div className="voting__right-container">
            <Card className={"classes"}>
              <CardContent>
                {/*<Typography className={classes.title} color="textSecondary" gutterBottom>*/}
                {/*  Word of the Day*/}
                {/*</Typography>*/}
                {/*<Typography variant="h5" component="h2">*/}
                {/*  be*/}
                {/*  {bull}*/}
                {/*  nev*/}
                {/*  {bull}o{bull}*/}
                {/*  lent*/}
                {/*</Typography>*/}
                {/*<Typography className={classes.pos} color="textSecondary">*/}
                {/*  adjective*/}
                {/*</Typography>*/}
                {/*<Typography variant="body2" component="p">*/}
                {/*  well meaning and kindly.*/}
                {/*  <br />*/}
                {/*  {'"a benevolent smile"'}*/}
                {/*</Typography>*/}
                <div className="people">
                  <span className="people__title">Участники</span>

                  <List className="people__list" >
                    {
                      this.renderParticipants()
                    }
                  </List>
                </div>
              </CardContent>
            </Card>

            <VotingChat />

          </div>
        </div>
      </Container>
    );
  }
}
