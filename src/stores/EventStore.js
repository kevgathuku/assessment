import AppConstants from '../constants/AppConstants';
import AppDispatcher from '../dispatcher/AppDispatcher';
import BaseStore from './BaseStore';

let EventStore = Object.assign({}, BaseStore, {
  events: null,

  setEventData(result) {
    this.events = result;
    this.emitChange('fetchedEventData');
  },

  getEventData() {
    return this.events;
  },
});

AppDispatcher.register(function(action) {
  switch (action.actionType) {
  case AppConstants.GET_MEMBER_EVENTS:
    EventStore.setEventData(action.data);
    break;
  default:
      // no default action
  }

  return true;
});

export default EventStore;
