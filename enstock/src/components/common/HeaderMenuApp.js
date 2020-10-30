import React, { Component } from 'react'
import AppBtnCart from './AppBtnCart';
import AppBtnChat from './AppBtnChat';
import AppBtnHome from './AppBtnHome';
import AppBtnLogin from './AppBtnLogin';
import AppBtnList from './AppBtnList';

class HeaderMenuApp extends Component {
state = {
    home: require("../../assets/images/nav/Home.png"),
    list: require("../../assets/images/nav/List.png"),
    chat: require("../../assets/images/nav/Chat.png"),
    cart: require("../../assets/images/nav/Cart.png"),
    account: require("../../assets/images/nav/Profile.png"),
    };
    render() {
    return (
        <>
            <div className="header-menu-app">
                <ul className="header-menu-list">
                    <li>
                        <AppBtnHome url={this.state.home} />
                    </li>
                    <li>
                        <AppBtnList url={this.state.list} />
                    </li>
                    <li>
                        <AppBtnChat url={this.state.chat} />
                    </li>
                    <li>
                        <AppBtnCart url={this.state.cart} />
                    </li>
                    <li>
                        <AppBtnLogin url={this.state.account} />
                    </li>
                </ul>
            </div>
        </>
    )
    }
}
export default HeaderMenuApp;