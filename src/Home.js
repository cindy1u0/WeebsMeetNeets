import React from 'react';
import logo from './logo.svg';
import './home.css';
import { BrowserRouter as Router, Link } from "react-router-dom";

export default function Home() {
  return <div className="App">
    <Link to="/users" className="app-link"> >> Start Your Weeb Journey</Link>
    <header className="App-header">
      <h1>WeebsMeetNeets</h1>
      <br />
      <img src={logo} className="App-logo" alt="logo" />
      <br />
      <br />
      <p>WeebsMeetNeets is a platform to connect all the Japanese anime lovers {'<3'} </p>
    </header>
  </div >;
}
