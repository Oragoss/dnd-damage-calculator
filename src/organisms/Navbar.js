import React from 'react';
import '../App.css';

export default function Navbar() {
    return (
        <nav id="navbar-example2" className="navbar">
            <a className="navbar-brand" href="/">Navbar</a>
            <ul className="nav nav-pills">
                <li className="nav-item">
                    <a className="nav-link" href="#fat">First Weapon(GreatSword)</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#mdo">Second Weapon (GreateAxe)</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="/" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                <div className="dropdown-menu">
                    <a className="dropdown-item" href="#one">one</a>
                    <a className="dropdown-item" href="#two">two</a>
                    <div role="separator" className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#three">three</a>
                </div>
                </li>
            </ul>
        </nav>
    );
}