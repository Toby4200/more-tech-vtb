import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import VotingChat from '../components/VotingChat';

export default class Login extends Component {

  handleClick = (e) => {
    e.preventDefault();

    // console.log(this.state.login);
    // console.log(this.state.role)
    // console.log(this.state.password);

    axios.post('https://next.json-generator.com/api/json/get/N17f3gUUP', {
      login: this.state.firstName,
      password: this.state.password,
      role: this.state.role
    })
      .then((res) => {
        console.log('res', res.data);
      })
  }

  handleChange = (inputName, event) => {
  console.log('inputName', inputName);
  this.setState({ [inputName]:event.target.value});
  }

  render() {
    return (
      <div className="login-page">
        <h4 className="login-page__title">Голосун<ThumbUpIcon fontSize="large"/></h4>
        <div className="login-page__top">
          <span className="login-page__subtitle">Войдите в свой аккаунт</span>
        </div>
          <form className="form" onSubmit={ this.handleClick }>
            <div className="card-body">
              <div className="form__wrapper">
                <div className="form__container">
                  <TextField
                    margin="normal"
                    variant="outlined"
                    id="outlined-email-input"
                    label="e-mail"
                    className="form__input"
                    onChange={ this.handleChange.bind(this, 'login') }
                  />
                  <TextField
                    margin="normal"
                    variant="outlined"
                    id="outlined-name"
                    label="Пароль"
                    className="form__input"
                    onChange={ this.handleChange.bind(this, 'password') }
                  />
                  <Button className="form__button" type="submit" variant="contained" color="default">
                    Войти
                  </Button>
                </div>
              </div>
            </div>
          </form>
        </div>
    )
  }
}





