import React, { Component } from 'react';
import axios from 'axios'
import { Route, Link } from 'react-router-dom'
// components
import Signup from './components/signIn'
import Navbar from './components/navbar'
import Home from './components/home'
 
class App extends Component {

  constructor() {
    super();
    this.state = {
      loggedIn: false,
      user: "Bob",
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
 
    prepareLoginButton = () => {
 
    this.auth2.attachClickHandler(this.refs.googleLoginBtn, {},
        (googleUser) => {
 
        let profile = googleUser.getBasicProfile();
        console.log('Token || ' + googleUser.getAuthResponse().id_token);
        console.log('ID: ' + profile.getId());
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail());
        //YOUR CODE HERE
        this.setState({loggedIn: true, 
          user: profile.getName(), 
          id: profile.getId(),
          token: googleUser.getAuthResponse().id_token, 
          image: profile.getImageUrl(),
        email: profile.getEmail()})
          console.log(profile.getName())
 
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
 
        return (
          <div className="App">
   
          <Navbar />
          <Route
            exact path="/"
            component={() => <Home loggedIn={this.state.loggedIn}  name={this.state.user} />}/>
            <div className="row mt-5">  
                <div className="col-md-12">
                    <h2 className="text-left">Google Login Demo</h2>
                    <div className="card mt-3">
                        <div className="card-body">
                             
                            <div className="row mt-5 mb-5">
                                <div className="col-md-4 mt-2 m-auto ">
                                    <button className="loginBtn loginBtn--google" ref="googleLoginBtn">
                                        Login with Google
                                    </button>
                                </div>    
                            </div>
                         
                        </div>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default App;