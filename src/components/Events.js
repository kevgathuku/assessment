import React, { Component } from 'react';
import OrgMembersActions from '../actions/OrgMembersActions';
import EventStore from '../stores/EventStore';

class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.params.username,
      events: null
    }
  }

  componentDidMount() {
    OrgMembersActions.getEvents(this.state.username);
    EventStore.addChangeListener(this.handleCommitEvents, 'fetchedEventData');
  }

  handleCommitEvents = () => {
    let commitData = EventStore.getEventData();
    var filtered = commitData.filter(data => data.payload.commits.length > 0)
    this.setState({
      events: filtered
    });

  }

  render() {
    let renderCommitData = function(data) {
      return (
        <tr key={data.id}>
          <th>{data.repo.name}</th>
          <th><a href={data.payload.commits[0].url}>{data.payload.commits[0].message}</a></th>
        </tr>
      )
    };
    return(
      <div className="container">
        <h2>{`${this.state.username}'s Commits`}</h2>
          <table className="u-full-width">
            <thead>
              <tr>
                <th>Repo</th>
                <th>Commit URL</th>
              </tr>
            </thead>
            <tbody>
              {this.state.events ? this.state.events.map(renderCommitData, this) : <tr><th>Loading</th></tr>}
            </tbody>
          </table>
      </div>
    )
  }
}

export default Event;
