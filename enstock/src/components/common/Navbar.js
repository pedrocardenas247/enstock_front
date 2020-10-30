import React, { Component } from "react";


export default class Navbar extends Component {
  state = {
    logo: require("../../assets/images/logo.png"),
  };

  render() {
    return (
      <>
        <div className="menu_scroll">
          <nav>
          
    <a href="/listing-grid">Ropa</a>
    <a href="/listing-grid">Comida</a>
    <a href="/listing-grid">Tecnologia</a>
    <a href="/listing-grid">Regalos</a>
    <a href="/listing-grid">Hogar</a>
    <a href="/listing-grid">Mascotas</a>
  </nav>
          
        </div>
      </>
    );
  }
}
