import React from 'react';
import ReactDOM from 'react-dom';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      id: 201,
      data: {},
    };
  }
  render() {
    return (
      <div>
        <h1>Header goes here</h1>
      </div>
    );
  }
}

// ReactDOM.render(<App />, document.getElementById('app'));
