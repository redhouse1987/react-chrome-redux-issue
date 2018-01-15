import React, { Component } from 'react';
import LoginAndRegister from './components/__loginAndRegister';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app-outer">
        <div className='inner'>       
          <LoginAndRegister />
        </div>
      </div>
    );
  }
}

export default App;
