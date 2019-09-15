import { observable, action } from 'mobx';
import axios from 'axios';

class VotingsState {
  @observable votingList;

  constructor() {
    this.votingList = [];
  }

  async getVotings() {
    const { data } = await axios.get('http://localhost:8090/votings');
    this.setVotingsState(data);
  }

  @action setVotingsState(data = []) {
    this.votingList = data;
  }
}

export default new VotingsState();