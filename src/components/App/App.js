import React, { Component } from 'react';
import Button from 'material-ui/Button';
import Header from './../Header/Header';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Button variant="raised" color="primary">
          Hello World
        </Button>
      </div>
    );
  }
}

export default App;
