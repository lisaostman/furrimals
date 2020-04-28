import React, { Component } from 'react'
import axios from 'axios';

class Home extends Component {
    constructor() {
        super()

        this.state = {value: ''};
        this.onSubmit = this.onSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
      }

      onSubmit(event) {
        event.preventDefault();
        console.log(this.state.value)
        axios.get("/api/friend?friend=" + this.state.value)
        .then(res => {
          if (res.data.length > 0 ) {
            console.log("The above friend emails gives you:")
            console.log(res.data[0])
        
            axios.post('/api/addfriend', {
              userId: res.data[0].userId,
              animalId: res.data[0].animalId
            })
            .then(function (response) {
              console.log("creature caught and posted " + response)
              this.state.value = '';
            })
            .catch(function (error) {
              console.log(error);
            });
          }
         else {
           console.log("Friend Not Found")
         }
                });
      }    

    componentDidMount() {
    }

    render() {
        const loggedIn = this.props.loggedIn;
        const name = this.props.name;
        console.log(this.props);
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
                                    </div>
                                    <button className="ui primary button">Add</button>
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
