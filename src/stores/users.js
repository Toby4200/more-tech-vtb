import { observable, action } from 'mobx';
import axios from 'axios';

export default class UsersState {
  @observable users;

  constructor() {
    this.users = [];
  }

  async getUsers() {
    const users = await axios.get('http://localhost:8090/users');

    this.setUsersState(users);
  }

  @action setUsersState(users) {
    this.users = users;
  }
}