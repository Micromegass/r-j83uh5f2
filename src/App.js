import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
        text: 0
    }
  }


  render() {
    return (
      <div className="container">
        <textarea rows="3" onChange={this.count.bind(this)}></textarea>
        <div className="counter">{this.state.text}</div>
      </div>
    );

  }


  count(event) {
    this.setState({
      text: event.target.value.length
    });
  }

}

export default App;
