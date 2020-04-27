import React, { Component } from 'react';
import '../App.css';

class Home extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    this.googleSDK();
    console.log('sfsfd');
  }

  googleSDK = () => {

    window['googleSDKLoaded'] = () => {
      window['gapi'].load('auth2', () => {
        this.auth2 = window['gapi'].auth2.init({
          client_id: '481029074891-c315na55ef7olnkqn32istv11vi62uje.apps.googleusercontent.com',
          cookiepolicy: 'single_host_origin',
          scope: 'profile email'
        });
        this.prepareLoginButton();
      });
    }

    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) { return; }
      js = d.createElement(s); js.id = id;
      js.src = "https://apis.google.com/js/platform.js?onload=googleSDKLoaded";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'google-jssdk'));

  }

  render() {
    const loggedIn = this.props.loggedIn;
    const name = this.props.name;
    console.log(this.props);
    return (
      <div className="col-4" >
        {loggedIn ? (
          <div className="col-md-12 text-center ui green segment">
            <h2 className="text-center">Welcome to Furrimals {name}!</h2>
            <br></br>
            <form className="ui form">
              <div className="field">
                <label>Shop Creature Code</label>
                <input placeholder="First Name" />
              </div>
              <div className="field">
                <div className="ui checkbox">
                  <input type="checkbox" className="hidden" readonly="" tabindex="0" />
                  <label>I agree that this is a valid purchase code from a receipt</label>
                </div>
              </div>
              <button type="submit" className="ui button">Enter Shop Code</button>
            </form>
          </div>

        ) : (
            <p>
            </p>
          )}
      </div>
    )

  }
}

export default Home
