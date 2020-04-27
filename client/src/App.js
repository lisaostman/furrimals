import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import axios from 'axios';
import Collection from './components/collection'
import Leaderboard from './components/leaderboard'
import Navbar from './components/navbar'
import Home from './components/home'
 
class App extends Component {

  constructor() {
    super();
    this.loggingOut = this.loggingOut.bind(this)
    this.state = {
      loggedIn: false,
      user: "",
      token: "",
      id: null,
      image: "",
      email: ""
    };
  }
 
    componentDidMount() {
        this.googleSDK();
        console.log('sfsfd');
    }

    loggingOut() {
      this.setState({loggedIn: false, 
        user: "", 
        id: null,
        token: "", 
        image: "",
      email: ""})
    }
 
    prepareLoginButton = () => {
 
    this.auth2.attachClickHandler(this.refs.googleLoginBtn, {},
        (googleUser) => {
 
        let profile = googleUser.getBasicProfile();
        console.log('Token || ' + googleUser.getAuthResponse().id_token);
        console.log('ID: ' + profile.getId());
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail());
        
        
        this.setState({loggedIn: true, 
          user: profile.getName(), 
          id: profile.getId(),
          token: googleUser.getAuthResponse().id_token, 
          image: profile.getImageUrl(),
        email: profile.getEmail()})
          console.log(profile.getName())

          axios.post('/api/create', {
            email: this.state.email
          })
          .then(function (response) {
            console.log("axios posted " + response)
          })
          .catch(function (error) {
            console.log(error);
          });
 
        }, (error) => {
            alert(JSON.stringify(error, undefined, 2));
        });
 
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
      const loggedIn=this.state.loggedIn;
 
        return (
          <div className="App">
          <Navbar loggedIn={this.state.loggedIn} loggingOut={this.loggingOut}/>
          <Route
            exact path="/"
            component={() => <Home loggedIn={this.state.loggedIn}  name={this.state.user} />}/>
            <Route
            exact path="/collection"
            component={() => <Collection loggedIn={this.state.loggedIn}  email={this.state.email} />}/>
            <Route
            exact path="/leaderboard"
            component={() => <Leaderboard loggedIn={this.state.loggedIn}  email={this.state.email} />}/>
            {loggedIn ? (
                      <div>
                        </div>
                        ) : (
                          <div className="col-md-12 text-center ui yellow segment"> 
                              <h2 className="text-center">Welcome to Furrimals!</h2>
                              Please login below ! 
                              <br/>
                                              <button className="loginBtn loginBtn--google btn-success" ref="googleLoginBtn">
                                                  Login with Google
                                              </button>
                          </div>
                            )}
            
            </div>
        );
    }
}

export default App;