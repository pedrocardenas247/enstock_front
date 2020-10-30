import React, {Component} from 'react';
import { BsCheckCircle } from 'react-icons/bs'

class WidgetStaticsInfo extends Component {
    state = {
        title: 'Formas de Pago',
        lists: [
            {
                icon: <BsCheckCircle />,
                text: 'En Efectivo'
            },
            {
                icon: <BsCheckCircle />,
                text: 'Tarjeta de Creditos'
            },
            {
                icon: <BsCheckCircle />,
                text: 'Transferencia Bancaria'
            },
            {
                icon: <BsCheckCircle />,
                text: 'Yape'
            },
            {
                icon: <BsCheckCircle />,
                text: 'Plim'
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

export default WidgetStaticsInfo;