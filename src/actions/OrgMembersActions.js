import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';
import request from 'superagent';

export default {
  getEvents: function(username) {
    request
      .get(`https://api.github.com/users/${username}/events`)
      .end(function(err, res) {
        let commitEvents = res.body.filter(event => event.type === 'PushEvent');
        AppDispatcher.dispatch({
          actionType: AppConstants.GET_MEMBER_EVENTS,
          data: commitEvents
        });
      })
  },
};
