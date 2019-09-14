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

import Link from '@material-ui/core/Link';

import Countdown from 'react-countdown-now';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
// import FaceIcon from '@material-ui/icons/Face';
// import DoneIcon from '@material-ui/icons/Done';

const VOITING_IST_FULL = [
  {
    meeting : 'Согласование переезда',
    admin : 'Владимир Раменский',
    meetType : 'Бессрочная',
    closed: false,
    id: '1',
    dateOfBegin: '21 - 09 - 2019 13:48',
    dateOfEnd: '22 - 09 - 2019 13:40',
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
          linkText: 'кофе-машина.pdf',
          linkHref: 'https://material-ui.com/api/divider/'
        },
        {
          linkText: 'монитор.pdf',
          linkHref: 'https://material-ui.com/api/divider/'
        },

        {
          linkText: 'стул.pdf',
          linkHref: 'https://material-ui.com/api/divider/'
        },
      ]
    },
    {
      title: 'Купить мониторы',
      links: [
        {
          linkText: 'кофе-машина.pdf',
          linkHref: 'https://material-ui.com/api/divider/'
        },
      ]
    },
    {
      title: 'Заказать стулья',
      links: [
        {
          linkText: 'кофе-машина.pdf',
          linkHref: 'https://material-ui.com/api/divider/'
        },
      ]
    },
    {
      title: 'Заказать массажистку',
      links: [
        {
          linkText: 'монитор.pdf',
          linkHref: 'https://material-ui.com/api/divider/'
        },

        {
          linkText: 'стул.pdf',
          linkHref: 'https://material-ui.com/api/divider/'
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
    } = VOITING_ITEM;

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
        linkText,
        linkHref,
      } = link;

      return (
        <ListItem className="link__item" >
          <Chip
            label={ linkText }
            className="class"
            clickable
            href={ linkHref }
            component="a"
          >
          </Chip>

          {/*<Link href={linkHref}>*/}
          {/*  <ListItemText primary={linkText} />*/}
          {/*</Link>*/}
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

                {/* Может пригодиться во втором статусе */}
                {/*<span className="status__icon">*/}
                {/*<SendIcon/>*/}
                {/*</span>*/}
              </div>

              {
                this.renderTimer()
              }
            </div>

            {/* Тут будет плашка */}

            <Typography variant="h1" gutterBottom className="voting__title">{VOITING_ITEM.title}</Typography>

            <Typography variant="h4" gutterBottom className="voting__description">{VOITING_ITEM.description}</Typography>

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
            <div className="people">


            </div>

            <div className="chat">

            </div>

          </div>

        </div>
      </Container>
    );
  }
}
