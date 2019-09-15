import { observable, action } from 'mobx';
import api from '../api';

export const Roles = {
  admin: 'admin',
  user: 'user',
  guest: 'guest'
};

class UserState {
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
    const { data } = await api.post('http://localhost:8090/auth', {
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

export default new UserState();