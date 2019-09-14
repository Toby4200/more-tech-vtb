import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';
import axios from 'axios';

export default class LoginPage extends Component {
    render() {
    return (
      <div className="login-page">
        <div className="login-page__top">
          <h4 className="login-page__title">Голосование</h4>
          <span className="login-page__subtitle">Войдите в свой аккаунт</span>

          <form className="form" onSubmit={ this.handleClick }>
            <div className="form__wrapper">
              <div className="form__container">
                <TextField className="form__input" />
                <TextField className="form__input" />
                <TextField className="form__input" />
              </div>

              <div className="form__container">
                <TextareaAutosize
                  aria-label="empty textarea"
                  placeholder="Empty"
                  className="form__textarea"
                  rows={ 8 }
                />
              </div>
8            </div>

            <input type="submit" value="Отправить" className="button"
            />
          </form>

        </div>
      </div>
    )
  }
}
