import React, { Component } from 'react'
import axios from 'axios';

class Home extends Component {
    constructor() {
        super()

        this.state = {value: '',
    message: ''};
        this.onSubmit = this.onSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
      }

      onSubmit(event) {
        event.preventDefault();
        console.log(this.state.value)
        axios.get("/api/email?email=" + this.state.value)
        .then(res => {
          if (res.data.length > 0 ) {
            console.log("The above friend emails gives you:")
            console.log(res.data[0])
        
            axios.post('/api/addfriend', {
              firstFriend: this.props.id,
              secondFriend: res.data[0].userId
            })
            .then(function (response) {
              console.log("friend added and posted " + response)
              this.setState({value: '',
            message: ''});
            })
            .catch(function (error) {
              console.log(error);
            });
          }
         else {
           console.log("Friend Not Found");
           this.setState({message: 'Invalid Friend. Make sure the email is correctly spelled.'});
         }
                });
      }    

    componentDidMount() {
    }

    render() {
        const loggedIn = this.props.loggedIn;
        const name = this.props.name;
        return (
            <div className="col-4" >
                {loggedIn ? (
                    <div>
                    <p>Welcome {name} !</p>

                    <div className="ui placeholder segment">
                        <div className="ui stackable very relaxed two column grid">
                            <div className="column">
                                <form className="ui form">
                                    <div className="field">
                                        <label>Add Friend</label>
                                        <div className="ui left icon input">
                                            <input type="text" 
                                            placeholder="Friend's Email" 
                                            value={this.state.value} 
                                            onChange={this.handleChange} />
                                            <i aria-hidden="true" className="user icon"></i>
                                        </div>
                                        <p>{this.state.message}</p>
                                    </div>
                                    <button className="ui primary button" onClick={this.onSubmit}>Add</button>
                                </form>
                            </div>
                            <div className="middle aligned column">
                                <button className="ui big button">
                                    <i aria-hidden="true" className="signup icon"></i>
                                    View Friends List
                                    </button>
                            </div>
                        </div>
                        <div className="ui vertical divider">Or</div>
                    </div>
                    </div>
                        ) : (
                            <div className="ui segment">
                            <h2 className="ui right floated header">Attention!</h2>
                            <div className="ui clearing divider"></div>
                            Log In Below To View This Page!
                            <br/> 
                        </div>
                    )}
            </div>
        )

    }
}

export default Home
