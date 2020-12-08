import React, { Component, Fragment } from 'react';
import Users from './components/UsersComponent';
import './App.css';
class App extends Component {
  render () {
    return (
      <div className="App">
        <Users />
      </div>
    );
  }
}
export default App;
