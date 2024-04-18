import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class Nav extends Component {
    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return <li><a href="/auth/google/" class="waves-effect waves-light btn">Log in with Google</a></li>
            default:
                return <li><a href="/api/logout/" class="waves-effect waves-light btn">Logout</a></li>
        }
    }
    render () {
        return (
            <nav>
                <div className="nav-wrapper nav-center">
                <Link 
                to={this.props.auth ? '/Dashboard' : '/'}
                className="left brand-logo"
                >Hi</Link>
                <ul className="center">

                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Projects">Projects</Link></li>
                    <li><Link to="/Leetcode">Leetcode</Link></li>
                    <li><Link to="/">Download Resume</Link></li>
                    {this.renderContent()}
                </ul>
                </div>
            </nav>           
        )
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}
export default connect(mapStateToProps)(Nav);