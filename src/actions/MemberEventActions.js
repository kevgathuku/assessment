import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';
import request from 'superagent';

export default {
  getOrgMembers: function() {
    request
      .get('https://api.github.com/orgs/andela/members')
      .end(function(err, res) {
        AppDispatcher.dispatch({
          actionType: AppConstants.GET_ORG_MEMBERS,
          data: res.body
        });
      })
  },
};
