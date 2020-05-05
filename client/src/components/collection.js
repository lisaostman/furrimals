import React, { Component } from 'react';
import CreatureCard from "./CreatureCard";
import axios from 'axios';

class Collection extends Component {
    constructor() {
        super()
        this.state = {
            creatures: [],
            howMany: null
        };
    }

    componentDidMount() {
        axios.get("/collection/api?email=" + this.props.email)
            .then(res => {
                console.log(res.data)
                this.setState({
                    creatures: res.data,
                    howMany: res.data.length
                })
            });
    }

    render() {
        const loggedIn = this.props.loggedIn;
        console.log(this.props);
        return (
            <div className="col-4" >
                {loggedIn ? (
                    <div>
                        <div className="ui red segment yellowbg">
                            <h2 className="ui right floated header">Statistics</h2>
                            <div className="ui clearing divider"></div>
                            <img className="ui small circular avatar image" src={this.props.image} alt="Google User avatar"></img>
                            <span>Welcome to your collection {this.props.user} !<br />
                                Creatures Collected: {this.state.howMany}</span>
                        </div>
                        <div className="ui orange segment">
                            <h2 className="ui left floated header">Found Creatures</h2>
                            <div className="ui clearing divider"></div>
                            {this.state.creatures.map(creature => (
                                <CreatureCard
                                    type={creature.animalType}
                                    imageType={creature.animalType + ".png"}
                                    animalId={creature.animalId}
                                    caughtId={creature.caughtId}
                                    email={creature.email}
                                    key={creature.caughtId}
                                    creatureName={creature.name}
                                />
                            ))}
                        </div>
                    </div>

                ) : (
                        <div className="ui segment">
                            <h2 className="ui right floated header">Attention!</h2>
                            <div className="ui clearing divider"></div>
                            Log In Below To View This Page!
                    <br />
                        </div>

                    )}
            </div>
        )

    }
}

export default Collection
