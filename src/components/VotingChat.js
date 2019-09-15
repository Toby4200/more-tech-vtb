import React, { Component } from 'react';
import Container from "@material-ui/core/Container";
import ThumbUpIcon from "@material-ui/core/SvgIcon/SvgIcon";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "../../src/styles/pages/_chat.scss"
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import InputBase from '@material-ui/core/InputBase'

export default class VotingChat extends Component {
  render() {
    return (
      <div className="chat-card">
        <div className="centrate">
          <div className="message-plate">
            <div className="points-tab"></div>

            <div className="first-mess">
              <div className="user-icon">
                <AccountCircleIcon fontSize="large"/>
              </div>
              <div className="user-name">
                Никита
              </div>
              <div className="user-message">
                Отлично, что новый офис близко к метро!
              </div>


            </div>
            <div className="second-message"></div>
          </div>

          <InputBase
            id="standard-dense"
            label="Ваше сообщение"
            margin="dense"
            multiline={true}
          />
          <div className="but">
            <Button variant="contained" className="button">
              Отправить сообщение
            </Button>
          </div>
        </div>
      </div>
    )
  }
}
