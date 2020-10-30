import React, {Component} from 'react';

class FooterQuickLinkWidget extends Component {
    state = {
        title: 'Frecuentes',
        links: [
            {
                path: '#',
                text: 'nosotros'
            },
            {
                path: '/sign-up',
                text: 'registrate'
            },
            {
                path: '/login',
                text: 'Mi Cuenta'
            },
            {
                path: '/add-listing',
                text: 'afilia tu negocio'
            },
            {
                path: '/contact',
                text: 'contactanos'
            },
            
        ]
    }
    render() {
        return (
            <>
                <div className="col-lg-3 column-td-6">
                    <div className="footer-item">
                        <h4 className="footer__title">
                            {this.state.title}
                        </h4>
                        <ul className="list-items">
                            {this.state.links.map((link, index) => {
                                return (
                                    <li key={index}>
                                        <a href={link.path}>{link.text}</a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </>
        );
    }
}

export default FooterQuickLinkWidget;