import React, { Component } from "react";
import Navbar from "./Navbar";
import HeaderAuthorAccess from "../other/account/HeaderAuthorAccess";
import $ from "jquery";
import Logo from "./Logo";
import BannerOneSearchInput from "../banner/banner1/BannerOneSearchInput";
import HeaderMenuApp from "./HeaderMenuApp";
import AppDownload from "./AppDownload";

class GeneralHeader extends Component {
  componentDidMount() {
    $(window).on("scroll", function () {
      //header fixed animation and control
      if ($(window).scrollTop() > 10) {
        $(".header-menu-wrapper").addClass("header-fixed");
      } else {
        $(".header-menu-wrapper").removeClass("header-fixed");
      }
    });
  }

  state = {
    logo: require("../../assets/images/logo.png"),
  };
  render() {
    return (
      <>
        <header className="header-area">
          <div className="header-menu-wrapper">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="menu-full-width">
                    {/* Boton App */}
                    <AppDownload/>
                    {/* Logo */}
                    <Logo url={this.state.logo} />

                    {/* Banner One Search Input */}
                    <BannerOneSearchInput />
                    {/* Navbar */}
                    <Navbar />

                    {/* Author Access */}
                    <HeaderAuthorAccess />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Author Access */}
          <HeaderMenuApp />
        </header>
      </>
    );
  }
}

export default GeneralHeader;
