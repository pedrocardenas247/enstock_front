import React, {Component} from 'react';

class Amenities extends Component {
    state = {
        items: [
            {
                id: 1,
                title: 'Transferencia Bancaria'
            },
            {
                id: 2,
                title: 'En Efectivo'
            },
            {
                id: 3,
                title: 'Tarjeta de Debito/Credito'
            },
            {
                id: 4,
                title: 'Yape'
            },
            {
                id: 5,
                title: 'Plim'
            },
            {
                id: 6,
                title: 'Paypal'
            },
            // {
            //     id: 7,
            //     title: 'Smoking Allowed'
            // },
            // {
            //     id: 8,
            //     title: 'Free Parking on Street'
            // },
            // {
            //     id: 9,
            //     title: 'Friendly Workspace'
            // },
            // {
            //     id: 10,
            //     title: 'Electricity'
            // },
            // {
            //     id: 11,
            //     title: 'Attached Garage'
            // },
            // {
            //     id: 12,
            //     title: 'Bike Parking'
            // },
            // {
            //     id: 13,
            //     title: 'Telephone'
            // },
        ]
    }
    render() {
        return (
            <>
                <div className="billing-form-item">
                    <div className="billing-title-wrap">
                        <h3 className="widget-title pb-0">Formas de Pago</h3>
                        <div className="title-shape margin-top-10px"></div>
                    </div>
                    <div className="billing-content">

                        {this.state.items.map(item => {
                            return (
                                <div className="custom-checkbox" key={item.id}>
                                    <input type="checkbox" id={'chb'+item.id} />
                                    <label htmlFor={'chb'+item.id}> {item.title}</label>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </>
        );
    }
}

export default Amenities;