import React, { Component } from 'react';
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "../../src/styles/pages/_chat.scss"
import InputBase from '@material-ui/core/InputBase'
import Avatar from '@material-ui/core/Avatar';
import FaceIcon from '@material-ui/icons/Face';


export default class VotingChat extends Component {
  render() {
    return (
      <div className="chat-card">


        <div className="centrate">
          <div className="message-plate">

            <div className="first-mess">
              <div className="user-icon1">
                <Avatar>
                  <FaceIcon />
                </Avatar>
              </div>
              <div className="user-name">
                Никита
              </div>
              <div className="user-message">
                Отлично, что новый офис близко к метро!
              </div>
            </div>
            <div className="second-message">
              <div className="user-icon2">
                <Avatar>
                  <FaceIcon />
                </Avatar>
              </div>
              <div className="user-name">
                Маша
              </div>
              <div className="user-message">
                И электричка рядом!
              </div>
            </div>
          </div>
          <div className="line"></div>
          <InputBase
            id="standard-dense"
            label="Ваше сообщение"
            margin="dense"
            rows="2"
            rowsMax="2"
            multiline={true}
            className="input"
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
