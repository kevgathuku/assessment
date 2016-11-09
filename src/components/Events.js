import React, { Component } from 'react';
import OrgMembersActions from '../actions/OrgMembersActions';

class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.params.username,
      events: null
    }
  }

  componentDidMount() {
    OrgMembersActions.getEvents(this.state.username, 'fetchedEventData');
  }

  render() {
    return(
      <div className="container">
        <h2>{`${this.state.username}'s Commits`}</h2>
      </div>
    )
  }
}

export default Event;
