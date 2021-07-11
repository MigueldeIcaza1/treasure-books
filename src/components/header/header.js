import React from 'react';
import ReactDOM from 'react-dom';

import logo from './../../coverpage.jpg';
import './header.css';


export class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <img src={logo} className="logo" alt="logo" />
            </header>
        )
    }
}