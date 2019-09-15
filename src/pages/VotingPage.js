import React, { Component } from 'react';
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

import Countdown from 'react-countdown-now';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import ImageIcon from '@material-ui/icons/Image';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import StarRateIcon from '@material-ui/icons/StarRate';

import lodash from 'lodash';

import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';

// card
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import axios from 'axios';

import votingState from '../stores/votings';

const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    return <div className="timer_done">Встреча окончена</div>;
  } else {
    return (<div className="timer">
      {/*<div className="timer__icon">*/}
      {/*  <HourglassEmptyIcon/>*/}
      {/*</div>*/}

      <div className="timer__countdown-container">
        <span className="timer__rest">Осталось </span>
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
      title: 'Страница голосования',
      voting: {}
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;

    this.setState({
      voting: votingState.getVotingById(Number(id))
    });
  }

  renderPoints = (points) => {
    const listItems = points.map((point) => {
      const {
        title,
        links = []
      } = point;

      return (
        <div className="points__container">
          <ListItem className="points__item">
            <ListItemText
              primary={ title }
              className="points__item-text"
            />

            <div className="points__votes-container vote">
              <ThumbUpAltIcon className="points__thumb-up points__thumb" />
              <ThumbDownAltIcon className="points__thumb-down points__thumb" />
            </div>
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
            className="link__a"
            clickable
            href={ url }
            component="a"
            color="primary"
            variant="outlined"
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

  renderParticipants = (participants, creator) => {
    const { id: creatorId } = creator;

    const kents = participants.map((kent) => {
      const {
        email = '',
        name = '',
        id = 0
      } = kent;

      return (
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <ImageIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={name} secondary={email} />

          {
            (creatorId === id) ? <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete">
                <StarRateIcon label="Кек"/>
              </IconButton>
            </ListItemSecondaryAction> : ''
          }
        </ListItem>
      )
    });

    return kents;
  }

  render() {
    const {
      voting = {}
    } = this.state;

    const title = lodash.get(voting, ['title'], '');
    const description = lodash.get(voting, ['description'], '');
    const points = lodash.get(voting, ['points'], []);

    const participants = lodash.get(voting, ['participants'], []);
    const creator = lodash.get(voting, ['creator'], {});

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

            <Typography variant="h1" gutterBottom className="voting__title">{title}</Typography>

            <Typography variant="h4" gutterBottom className="voting__description">Описание</Typography>
            <div variant="h4"className="voting__description-text">{description}</div>

            <List
              component="nav"
              aria-labelledby="nested-list-subheader"
              className="points"
            >
              <span className="points__title">Список пунктов для согласования</span>
              {
                this.renderPoints(points)
              }
            </List>

          </div>

          <div className="voting__right-container">
            <Card className={"classes"}>
              <CardContent>
                <div className="people">
                  <span className="people__title">Участники</span>

                  <List className="people__list" >
                    {
                      this.renderParticipants(participants, creator)
                    }
                  </List>
                </div>
              </CardContent>
            </Card>

            <div className="chat">

            </div>

          </div>

        </div>
      </Container>
    );
  }
}
