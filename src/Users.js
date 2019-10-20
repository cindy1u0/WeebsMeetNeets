import React from 'react';
import logo from './logo.svg';
import './App.css';
import FetchRandomUser from "./fetch";
import { BrowserRouter as Router, Link } from "react-router-dom";

export default function Users() {
    return <div className="app">
        <Link to="/home" className="app-link">Home</Link>
        <header className="app-header">
            <h1><img src={logo} className="app-logo" alt="logo" />WeebsMeetNeets</h1>
            <br />
        </header>
        <div className="anime">
            <FetchRandomUser />
        </div>
    </div >;
}
