import React, { Component } from 'react'

class Home extends Component {
  state = {friends: []}
        componentDidMount() {
          fetch('/friends')
            .then(res => res.json())
            .then(friends => this.setState({ friends }));
        }
        render() {
          return (
            <div>
              {this.state.friends.map(friend =>
                <div key={friend.id}> hi {friend.firstname} {friend.lastname} {friend.age} </div>
              )}
              
            </div>
             );
            }
          }
        

export default Home;