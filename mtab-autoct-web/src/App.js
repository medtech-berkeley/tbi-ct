// import logo from './logo.svg';
import './App.css';
import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';


import { BrowserRouter as Router, Route } from "react-router-dom";

import IntroAgreement from "./components/IntroAgreement";

import TopBar from "./components/TopBar";
import SideBar from "./components/SideBar";
import SideBarToggle from "./components/SideBarToggle";

import { Component } from 'react';

// import Sidebar from 'react-bootstrap/Sidebar';
// import styled from 'styled-components';

// import NavBar from 'react-bootstrap/Nav';

class App extends React.Component {
  state = {open: true}

  toggleMenu = () => {
    this.setState({ open: !this.state.open });
    console.log(this.state.open);
  };

  render = () => {
    const { open } = this.state;
    return (
      <div className="App">
        <IntroAgreement></IntroAgreement>
        <TopBar ></TopBar>
        <SideBar open={open}></SideBar>
        <SideBarToggle open={open} toggleMenu={this.toggleMenu}></SideBarToggle>
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <Navbar className = "top-bar">
//         <Container>
//           <Navbar.Brand> Auto-CT </Navbar.Brand>
//         </Container>
//       </Navbar>

//       <nav id = "sidebar">
//         <h2> How to Use Auto CT </h2>
//         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
//         <div>
//           DEMO here
//         </div>
//       </nav>
//     </div>
//   );
// }

export default App;
