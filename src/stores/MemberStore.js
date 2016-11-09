import AppConstants from '../constants/AppConstants';
import AppDispatcher from '../dispatcher/AppDispatcher';
import BaseStore from './BaseStore';

let MemberStore = Object.assign({}, BaseStore, {
  members: null,

  setMembers(result) {
    this.members = result;
    this.emitChange('fetchedMembers');
  },

  getMembers() {
    return this.members;
  },
});

AppDispatcher.register(function(action) {
  switch (action.actionType) {
  case AppConstants.GET_ORG_MEMBERS:
    MemberStore.setMembers(action.data);
    break;
  default:
      // no default action
  }

  return true;
});

export default MemberStore;
