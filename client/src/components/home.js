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
     
        (function(d, s, id){
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) {return;}
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
                            <div className="col-md-12 text-center"> 
                      <h2 className="text-center">Welcome to Furrimals {name}!</h2>
                      Enter a shop code below to begin collecting:
                      <br/>
                      <textarea className="form-control" aria-label="With textarea"></textarea>
                                      <button className="loginBtn loginBtn--google btn-success" ref="googleLoginBtn">
                                          Enter Shop Code
                                      </button>
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
