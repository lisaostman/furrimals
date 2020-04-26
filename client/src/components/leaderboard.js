import React, { Component } from 'react'

class Home extends Component {
    constructor() {
        super()
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
                            <p>Welcome {name} !</p>
                        ) : (
                                <p>
                                </p>
                            )}
                    </div>
        )

    }
     }

export default Home
