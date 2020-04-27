import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {
    constructor() {
        super()
    }

    componentDidMount() {
        axios.get("/collection/api?email=" + this.props.email)
            .then(res => {
                console.log(res);
                console.log(res.data)
            });
        console.log("Heyyyy 2!")
    }

    render() {
        const loggedIn = this.props.loggedIn;
        const email = this.props.email;
        console.log(this.props);
        return (
            <div className="col-4" >
                {loggedIn ? (
                    <div>Welcome to your collection {email} !
                            <div className="ui red segment">
                            <h2 className="ui right floated header">Statistics</h2>
                            <div className="ui clearing divider"></div>
                            <img src="/images/wireframe/short-paragraph.png" className="ui image" />
                        </div>
                        <div className="ui orange segment">
                            <h2 className="ui left floated header">Found Creatures</h2>
                            <div className="ui clearing divider"></div>
                            <img src="/images/wireframe/short-paragraph.png" className="ui image" />
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
