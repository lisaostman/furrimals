import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {
    constructor() {
        super()
    }

    componentDidMount() { 
        axios.get("http://localhost:3000/collection/api/" + this.props.email)
        .then(res => {
            console.log(res);
            console.log("hey!@")
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
                            <p>Welcome to your collection {email} !</p>
                        ) : (
                                <p>
                                </p>
                            )}
                    </div>
        )

    }
     }

export default Home
