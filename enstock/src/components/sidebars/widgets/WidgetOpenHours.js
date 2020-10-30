import React, {Component} from 'react';

class WidgetOpenHours extends Component {
    state = {
        title: 'Horario de Atencion',
        stitle: 'Abierto Ahora',
        items: [
            {
                day: 'Lunes',
                time: '9am - 5pm',
                close: false,
            },
            {
                day: 'Martes',
                time: '9am - 5pm',
                close: false,
            },
            {
                day: 'Miercoles',
                time: '9am - 5pm',
                close: false,
            },
            {
                day: 'Jueves',
                time: '9am - 5pm',
                close: false,
            },
            {
                day: 'Viernes',
                time: '9am - 5pm',
                close: false,
            },
            {
                day: 'Sab-Dom',
                time: 'Cerrado',
                close: true,
            }
        ]
    }
    render() {
        return (
            <>
                <div className="sidebar-widget">
                    <div className="opening-hours">
                        <div className="listing-badge d-flex justify-content-between align-items-center">
                            <div>
                                <h3 className="widget-title">
                                    {this.state.title}
                                </h3>
                                <div className="title-shape"></div>
                            </div>
                            <p><span className="theme-btn button-success">
                                {this.state.stitle}
                            </span></p>
                        </div>
                        <ul className="list-items padding-top-30px">
                            {this.state.items.map((item, i) => {
                                return (
                                    <li key={i} className="d-flex justify-content-between">
                                        {item.day} <strong className={item.close ? 'color-text' : 'font-weight-medium'}>{item.time}</strong>
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

export default WidgetOpenHours;