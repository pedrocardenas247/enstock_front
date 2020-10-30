import React, {Component} from 'react';
import {Link} from "react-router-dom";

class FooterCategoryWidget extends Component {
    state = {
        title: 'Categorias',
        links: [
            {
                path: '#',
                text: 'Ropa'
            },
            {
                path: '#',
                text: 'Comida'
            },
            {
                path: '#',
                text: 'Tecnologia'
            },
            {
                path: '#',
                text: 'Regalos'
            },
            {
                path: '#',
                text: 'Hogar'
            },
            {
                path: '#',
                text: 'Mascotas'
            }
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
                                        <Link to={link.path}>{link.text}</Link>
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

export default FooterCategoryWidget;