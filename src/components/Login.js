import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';
import axios from 'axios';

export default class LoginPage extends Component {

  handleClick = (e) => {
    e.preventDefault();

    console.log(this.state.login);
    console.log(this.state.role)
    console.log(this.state.password);

    axios.post('https://next.json-generator.com/api/json/get/N17f3gUUP', {
      login: this.state.firstName,
      password: this.state.password,
      role: this.state.role
    })
      .then((res) => {
        console.log('res', res.data);
      })
  }

  handleChahge = (inputName, event) => {
    this.setState({ [inputName]: event.target.value});
  }


  render() {

    const loginPage = {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'nowrap',
      justifyContent: 'space-around',
      alignItems: 'baseline',
      alignContent: 'stretch'
    }


    return (
      <div className="login-page" style={loginPage} >
        <div className="login-page__top">
          <span className="login-page__subtitle">Войдите в свой аккаунт</span>
          ​
          <form className="form" onSubmit={ this.handleClick }>
            <div className="form__wrapper">
              <div className="form__container">
                <TextField className="form__input" onChange={ this.handleChahge.bind(this, 'login') }/>
                <br/>
                <TextField className="form__input" onChange={ this.handleChahge.bind(this, 'password') }/>
              </div>
            </div>
              ​
              <input type="submit" value="Отправить" className="button"/>
            </form>
            ​
          </div>
        </div>
      )
    }
  }
