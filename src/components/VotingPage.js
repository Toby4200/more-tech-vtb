import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';
import axios from 'axios';

export default class VotingPage extends Component {

  handleChahge = (inputName, event) => {
    console.log('inputName', inputName);
    this.setState({ [inputName]: event.target.value});
  }

  render() {
    return (
      <div className="voting">
        <div className="about-us">
          <div className="about-us__top">
            <h1 className="about-us__title">Старница создания голосования</h1>

            <span className="about-us__subtitle">Lorem ispum sed isem fed</span>
          </div>

          <form className="form" onSubmit={ this.handleClick }>
            <div className="form__wrapper">
              <div className="form__container">
                <TextField className="form__input"/>
                <TextField className="form__input"/>
                <TextField className="form__input"/>
              </div>

              <div className="form__container">
                <TextareaAutosize
                  aria-label="empty textarea"
                  placeholder="Empty"
                  className="form__textarea"
                  rows={ 8 }
                />
              </div>
            </div>

            {/*<button*/}
            {/*  type="submit"*/}
            {/*  className="button"*/}
            {/*>*/}

            {/*</button>*/}
            <input type="submit" value="Отправить" className="button"
            />
          </form>
        </div>
      </div>
    )
  }
}
