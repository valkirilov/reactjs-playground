import React, { Component } from 'react';

import './Navbar.css';

import { Link, NavLink } from "react-router-dom";
import { FormattedMessage } from 'react-intl';

import LocaleButton from './../Atoms/LocaleButton';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="/" className="navbar-brand">React</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link" exact activeClassName="active">
                                <FormattedMessage id="navbar.home" defaultMessage="Home" />
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/posts" className="nav-link" activeClassName="active">
                                <FormattedMessage id="navbar.posts" defaultMessage="Posts" />
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/albums" className="nav-link" activeClassName="active">
                                <FormattedMessage id="navbar.albums" defaultMessage="Albums" />
                            </NavLink>
                        </li>
                    </ul>

                    <form className="form-inline my-2 my-lg-0">
                        <LocaleButton value="en" />
                        <LocaleButton value="bg" />
                        {/* <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"> */}
                        {/* <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
                    </form>
                </div>
            </nav>
        );
    }
}

export default Navbar;