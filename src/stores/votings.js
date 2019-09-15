import { observable, action } from 'mobx';
import axios from 'axios';

class VotingState {
  @observable votingList;

  constructor() {
    this.votingList = [];
  }

  async getList() {
    const { data } = await axios.get('http://localhost:8090/votings');
    this.setListState(data);
    return data;
  }

  async addVotingRequest(created) {
    const { data } = await axios.post('http://localhost:8090/voting', { ...created });
    this.addVotingToList(data);
    return data;
  }

  getVotingById(id) {
    return this.votingList.find(({ id: votingId }) => votingId === id);
  }

  addVotingToList(data) {
    this.setListState([...this.votingList, data]);
  }

  @action setListState(data = []) {
    this.votingList = data;
  }
}

export default new VotingState();