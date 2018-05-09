import React, { Component } from 'react';

import Routes from './components/router'
import './App.css';

class App extends Component {
  state = {users: []}
  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }
  render() {
    return (
      <div className="App">
      <Routes />
        {this.state.users.map(user =>
          <div key={user.id}> Hello {user.username}</div>
        )}
        
      </div>
    );
  }
}

export default App;
