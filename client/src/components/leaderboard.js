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
                    <div>
                    <p>Welcome {name} !</p>

                    <div className="ui placeholder segment">
                        <div className="ui stackable very relaxed two column grid">
                            <div className="column">
                                <form className="ui form">
                                    <div className="field">
                                        <label>Add Friend</label>
                                        <div className="ui left icon input">
                                            <input type="text" placeholder="Friend's Email" />
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
