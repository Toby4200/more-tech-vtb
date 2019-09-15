import { observable, action } from 'mobx';
import axios from 'axios';

class UsersState {
  @observable users;

  constructor() {
    this.users = [];
  }

  async getUsers() {
    const { data } = await axios.get('http://localhost:8090/users');

    this.setUsersState(data);
  }

  @action setUsersState(users) {
    this.users = users;
  }
}

export default new UsersState();
