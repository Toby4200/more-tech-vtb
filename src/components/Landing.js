import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';
import axios from 'axios';

export default class Landing extends Component {
  handleClick = (e) => {
    e.preventDefault();

    console.log('click');
    // axios.get('http://amtel-api.klevertech.me/core-rzd-api/transactions/')
    //   .then((res) => {
    //     console.log('res', res.data);
    //   })
    console.log(this.state.firstName);
    console.log(this.state.lastName);
    console.log(this.state.middleName);

    axios.post('http://amtel-api.klevertech.me/core-rzd-api/tickets', {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      middleName: this.state.middleName,
    })
      .then((res) => {
        console.log('res', res.data);
      })


  }

  handleChahge = (inputName, event) => {
    console.log('inputName', inputName);
    this.setState({ [inputName]: event.target.value});
  }

  render() {
    return (
      <div className="landing">
        <div className="about-us">
          <div className="about-us__top">
            <h1 className="about-us__title">contact us</h1>

            <span className="about-us__subtitle">Lorem ispum sed isem fed</span>
          </div>

          <form className="form" onSubmit={ this.handleClick }>
            <div className="form__wrapper">
              <div className="form__container">
                <TextField className="form__input" onChange={ this.handleChahge.bind(this, 'firstName') }/>
                <TextField className="form__input" onChange={ this.handleChahge.bind(this, 'lastName') }/>
                <TextField className="form__input" onChange={ this.handleChahge.bind(this, 'middleName') }/>
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
