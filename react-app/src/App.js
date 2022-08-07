import React, { Component } from "react";
import "./App.css";
import Content from "./components/Content";
import Header from "./components/Header";
import SideBar from "./components/SideBar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container__content-sidebar">
        <SideBar />
        <Content />
        </div>
      </div>
    );
  }
}

export default App;
