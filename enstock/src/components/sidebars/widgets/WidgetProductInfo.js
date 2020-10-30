import React, {Component} from 'react';
import { BsCheckCircle } from 'react-icons/bs'

class WidgetProductInfo extends Component {
    state = {
        title: 'Detalles',
        lists: [
            {
                icon: <BsCheckCircle />,
                text: 'Material: Relleno de fibra de poliester'
            },
            {
                icon: <BsCheckCircle />,
                text: 'SKU: NAO195'
            },
            {
                icon: <BsCheckCircle />,
                text: 'Colores: Negro, Rojo, Blanco'
            },
            {
                icon: <BsCheckCircle />,
                text: 'Tallas: S, M , L'
            },
            {
                icon: <BsCheckCircle />,
                text: 'Impermeable: Si'
            },
        ]
    }
    render() {
        return (
            <>
                <div className="sidebar-widget">
                    <h3 className="widget-title">
                        {this.state.title}
                    </h3>
                    <div className="title-shape"></div>
                    <div className="info-list static-info padding-top-35px">
                        <ul>
                            {this.state.lists.map((item, index) => {
                                return (
                                    <li className="mb-2" key={index}>
                                        <i className="la">{item.icon}</i> {item.text}
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

export default WidgetProductInfo;