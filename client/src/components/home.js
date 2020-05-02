import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';

class Home extends Component {
  constructor() {
    super()
    this.onSubmit = this.onSubmit.bind(this)
    this.state = {value: '',
  message: ''};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  componentDidMount() {
    const loggedIn = this.props.loggedIn;
    if (loggedIn === true){
      console.log('sfsfd');
    }
    else {this.googleSDK();}
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

  onSubmit(event) {
    let currentComponent = this;
    event.preventDefault();
    console.log(this.state.value)
    axios.get("/api/code?code=" + this.state.value)
    .then(res => {
      if (res.data.length > 0 ) {
        console.log("The above shop code gives you:")
        console.log(res.data[0].animalId)
        console.log(this.props.id)
    
        axios.post('/api/caught', {
          userId: this.props.id,
          animalId: res.data[0].animalId
        })
        .then(function (response) {
          console.log("creature caught and posted " + response)
          currentComponent.setState({value: '',
        message: ''})
        })
        .catch(function (error) {
          console.log(error);
        });
      }
     else {
       console.log("Shop Code Not Valid");
       this.setState({message: 'Shop Code not valid. Please ensure there are no spaces, letters or symbols.'})
     }
            });
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
                <input placeholder="Shop Code Here i.e SHOP123"  value={this.state.value} onChange={this.handleChange} />
              </div>
              <div className="field">
                <div className="ui checkbox">
                <p>{this.state.message}</p>
                </div>
              </div>
              <button type="submit" className="ui button" onClick={this.onSubmit}>Enter Shop Code</button>
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
