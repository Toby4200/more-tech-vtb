import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import { observer } from 'mobx-react';
import userStore from '../stores/user';
import { withRouter, Link } from "react-router-dom";
import VotingChat from '../components/VotingChat';

@observer
class Login extends Component {

  handleClick = (e) => {
    e.preventDefault();

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
    this.setState({ [inputName]:event.target.value});
  };

  auth = () => {
    const { login } = this.state;
    const { history } = this.props;

    userStore.getUser(login)
      .then(() => {
        history.push('/voting-list');
      });
  };

  render() {
    return (
      <div className="login-page">
        <h4 className="login-page__title">Голосун<ThumbUpIcon fontSize="large"/></h4>
        <div className="login-page__top">
          <span className="login-page__subtitle">Войдите в свой аккаунт</span>
        </div>
          <form className="form">
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
                    type="password"
                    onChange={ this.handleChange.bind(this, 'password') }
                  />
                  <Button onClick={this.auth} className="form__button" variant="contained" color="default">
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

export default withRouter(Login)





