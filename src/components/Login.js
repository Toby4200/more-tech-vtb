import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';
import axios from 'axios';


export default class Login extends Component {
    render() {
    return (
      <div className="login-page">
        <div className="login-page__top">
          <h4 className="login-page__title">Голосование</h4>
          <span className="login-page__subtitle">Войдите в свой аккаунт</span>
        </div>
          <form className="form">
            <div className="form__wrapper">
                <div className="form__container">
                  <TextField className="form__input" />
                  <TextField className="form__input" />
                  <Button className="form__button" variant="contained" color="primary">
                  Войти
                </Button>
                </div>
              </div>

          </form>
      </div>
    )
  }
}





