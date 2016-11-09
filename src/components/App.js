import React, { Component } from 'react';
import '../styles/App.css';
import MemberEventActions from '../actions/MemberEventActions';
import MemberStore from '../stores/MemberStore';

class App extends Component {
  constructor() {
    super();
    this.state = {
      members: null
    }
  }
  componentDidMount() {
    MemberEventActions.getOrgMembers();
    MemberStore.addChangeListener(this.handleOrgMembersResult, 'fetchedMembers');
  }

  handleOrgMembersResult = () => {
    let memberData = MemberStore.getMembers();
    this.setState({
      members: memberData
    });
  }
  render() {
    let renderUserNames = function(data) {
      return (
        <tr key={data.login}>
          <th><img className="avatar" src={data.avatar_url} alt="avatar"/>{}</th>
          <th>{data.login}</th>
        </tr>
      )
    };
    return (
      <div className="container">
        <h2>Welcome to Andela</h2>
        <table className="u-full-width">
          <thead>
            <tr>
              <th>Avatar</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {this.state.members ? this.state.members.map(renderUserNames, this) : <tr><th>Loading</th></tr>}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
