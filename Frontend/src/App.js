import React, { Component } from 'react';
import './App.css';

import Upload from './Upload/Upload';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Card">
          <Upload />
        </div>
      </div>
    );
  }
}

export default App;
