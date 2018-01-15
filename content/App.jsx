import React, {Component} from 'react';
import {connect} from 'react-redux';

class App extends Component {
	
		constructor(props) {
      super(props);
		}

  render() {

    return (
			
      <div>
        <span>test {this.props.navigationReducer.popupLoginRegVariance}</span>
      </div>
			
    );
  }
}

const mapStateToProps = (state) => {
  return {
		navigationReducer: state.navigationReducer
  };
};

export default connect(mapStateToProps)(App);