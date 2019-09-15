import { observable, action } from 'mobx';
import axios from 'axios';

export const Roles = {
  admin: 'admin',
  user: 'user',
  guest: 'guest'
};

export default class UserState {
  @observable name;
  @observable email;
  @observable role;
  @observable id;

  constructor() {
    this.name = '';
    this.email = '';
    this.role = Roles.guest;
    this.id = -1;
  }

  async getUser(email) {
    const data = await axios.post('http://localhost:8090/auth', {
      email
    });

    this.set(data);
  }

  @action set({ name, email, role, id }) {
    this.name = name;
    this.email = email;
    this.role = role;
    this.id = id;
  }
}