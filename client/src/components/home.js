import React, { Component } from 'react'

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
                            <p>Welcome {name} !</p>
                        ) : (
                                <p>
                                    Please Log In!
                                    {this.props.name}
                                    {this.props.loggedIn}
                                </p>
                            )}
                    </div>
        )

    }
     }

export default Home
