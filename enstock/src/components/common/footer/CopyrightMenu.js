import React, {Component} from 'react';

class CopyrightMenu extends Component {
    state = {
        links: [
            {
                path: '#',
                title: 'Terminos y Condiciones'
            },
            {
                path: '#',
                title: 'Politicas de Privacidad'
            },
            {
                path: '#',
                title: 'Preguntas Frecuentes'
            }
        ]
    }
    render() {
        return (
            <>
                <ul className="list-items">
                    {this.state.links.map((link, index) => {
                        return (
                            <li key={index}>
                                <a href={link.path}>{link.title}</a>
                            </li>
                        )
                    })}
                </ul>
            </>
        );
    }
}

export default CopyrightMenu;