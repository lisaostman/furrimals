import React, { Component } from 'react';
import FriendCard from "./FriendCard";
import axios from 'axios';

class Friends extends Component {
    constructor(props) {
        super(props)
        this.state = {
            friends: [],
            howMany: null
          };
    }

    componentDidMount() {
        let currentComponent = this;
        console.log(this.props.email);
        axios.get("/api/seconduser?seconduser=" + this.props.id)
            .then(res => {
                 console.log(res.data)
                 currentComponent.setState({
                     friends: res.data,
                     howMany: res.data.length
                 })
                 let friends = res.data.length;
                 axios.get("/collection/api?email=" + this.props.email)
            .then(res => {
                console.log(res.data)
                this.setState({
                    creatures: res.data,
                    howMany: friends + res.data.length
                })
            });
             });

    }

    render() {
        return (
            <div className="col-4" >
                        <div className="ui yellow inverted segment">
                            <h2 className="ui left floated header">Friends List</h2>
                            Together, you have caught {this.state.howMany}
                            <div className="ui clearing divider"></div>
                            {this.state.friends.map(friend => (
                            <FriendCard
                                email={friend.email}
                                imageType = {friend.animalType + ".png"}
                                creatureName={friend.name}
                                key = {friend.caughtId}
                                howMany = {this.state.howMany}
                            />
                            ))}
                        </div>
                    </div>
        )

    }
}

export default Friends
