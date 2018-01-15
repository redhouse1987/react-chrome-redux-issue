import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Login from './login';
import Register from './register';
import * as navActions from '../../background/actions/navigationActions';

class LoginAndRegister extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    let tabView = this.props.navigationReducer.popupLoginRegVariance;

    return (
      <div className={"log-reg-par " + tabView + "-active"}>
        <div className="log-reg-par-inner">
          <div className="toggle-log-reg-box">
            <div className="option" id='pop-login-tab' onClick={() => this.props.actions.navActions.switchLoginReg('login')}>
              Login
						</div>
            <div className="option" id='pop-login-register' onClick={() => this.props.actions.navActions.switchLoginReg('register')}>
              Register
						</div>
          </div>
          <div className="popup-logins">
          {tabView === "login" ? <Login /> : <Register />}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    navigationReducer: state.navigationReducer
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      navActions: bindActionCreators(navActions, dispatch)
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginAndRegister);