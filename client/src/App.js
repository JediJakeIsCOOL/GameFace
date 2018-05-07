import React, { Component } from 'react';
import ContactMain from './components/ContactMain'
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
        {this.state.users.map(user =>
          <div key={user.id}> Hello {user.username}</div>
        )}
        <ContactMain />
      </div>
    );
  }
}

export default App;
