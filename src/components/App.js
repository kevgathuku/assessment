import React, { Component } from 'react';
import logo from '../images/logo.svg';
import '../styles/App.css';
import MemberEventActions from '../actions/MemberEventActions';
import MemberStore from '../stores/MemberStore';

class App extends Component {
  componentDidMount() {
    MemberEventActions.getOrgMembers();
    MemberStore.addChangeListener(this.handleOrgMembersResult, 'fetchedMembers');
  }

  handleOrgMembersResult = () => {
    let memberData = MemberStore.getMembers();
    let usernames = memberData.map(data => data.login);
    console.log(usernames);
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
