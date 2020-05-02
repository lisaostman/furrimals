import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.png';
import '../App.css';

class Navbar extends Component {
    constructor() {
        super()
        this.logout = this.logout.bind(this)
    }

    logout(event) {
        event.preventDefault()
        console.log('logging out')
       this.props.loggingOut();
      }

    render() {
        const loggedIn = this.props.loggedIn;
        console.log('navbar render, props: ')
        console.log(this.props);
        
        return (
            <div>

                <header className="navbar App-header" id="nav-container">
                <div className="col-4" ></div>
                    <div className="col-4 col-mr-auto">
                    <div id="top-filler"></div>
                        <img src={logo} className="App-logo" alt="logo" />
                        <h1 className="App-title">FURRIMALS</h1>
                    </div>
                    <div className="col-4" >
                        {loggedIn ? (
                            <section className="navbar-section">
                                <Link to="/" className="btn btn-warning text-secondary">
                            <span className="text-secondary">home</span>
                            </Link>
                                <Link to="/collection" className="btn btn-warning">
                                <span className="text-secondary">collection</span>
                                </Link>
                                <Link to="/leaderboard" className="btn btn-warning">
                                <span className="text-secondary">leaderboard</span>
                                </Link>
                                <Link to="#" className="btn btn-warning" onClick={this.logout}>
                                <span className="text-secondary">logout</span></Link>
                            </section>
                        ) : (
                                <section className="navbar-section">
                                    <Link to="/" className="btn btn-warning text-secondary">
                                        <span className="text-secondary">home</span>
                                        </Link>
                                </section>
                            )}
                    </div>
                </header>
            </div>

        );

    }
}

export default Navbar