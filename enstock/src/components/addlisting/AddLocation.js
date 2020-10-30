import React, {Component} from 'react';
import { FiMap } from 'react-icons/fi'
import { FaMapSigns } from 'react-icons/fa'
import { BsFileCode } from 'react-icons/bs'
import Select from "react-select";

const cities = [
    {
        value: 0,
        label: 'Select a City'
    },
    {
        value: 1,
        label: 'New York'
    },
    {
        value: 2,
        label: 'Los Angeles'
    },
    {
        value: 3,
        label: 'Chicago'
    },
    {
        value: 4,
        label: 'Phoenix'
    },
    {
        value: 5,
        label: 'Washington'
    },
    {
        value: 6,
        label: 'Boston'
    },
    {
        value: 7,
        label: 'Philadelphia'
    },
    {
        value: 8,
        label: 'Baltimore'
    },
    {
        value: 9,
        label: 'Seattle'
    },
    {
        value: 10,
        label: 'San Francisco'
    },
];
const states = [
    {
        value: 0,
        label: 'Select a State'
    },
    {
        value: 1,
        label: 'California'
    },
    {
        value: 2,
        label: 'Florida'
    },
    {
        value: 3,
        label: 'Texas'
    },
    {
        value: 4,
        label: 'Hawaii'
    },
    {
        value: 5,
        label: 'Arizona'
    },
    {
        value: 6,
        label: 'Michigan'
    },
    {
        value: 7,
        label: 'New Jersey'
    },
    {
        value: 8,
        label: 'Georgia'
    },
    {
        value: 9,
        label: 'South Carolina'
    },
    {
        value: 10,
        label: 'Montana'
    },
];
class AddLocation extends Component {
    states = {
        selectedCity: null,
        selectedState: null,
        title: 'Agregar la Direccion'
    }

    handleChangeCity = () => {
        const { selectedCity } = this.state;
        this.setState(
            { selectedCity }
        );
    }
    handleChangeState = () => {
        const { selectedState } = this.state;
        this.setState(
            { selectedState }
        );
    }
    render() {
        return (
            <>
                <div className="billing-form-item">
                    <div className="billing-title-wrap">
                        <h3 className="widget-title pb-0">
                            {this.states.title}
                        </h3>
                        <div className="title-shape margin-top-10px"></div>
                    </div>
                    <div className="billing-content">
                        <div className="contact-form-action">
                            <form method="post">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="input-box">
                                            <label className="label-text">Direccion</label>
                                            <div className="form-group">
                                                <span className="la form-icon">
                                                    <FiMap />
                                                </span>
                                                <input className="form-control" type="text" name="name" placeholder="Ingrese la direccion del negocio" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="input-box">
                                            <label className="label-text">Direccion de Sucursal</label>
                                            <div className="form-group">
                                                <span className="la form-icon">
                                                    <FaMapSigns />
                                                </span>
                                                <input className="form-control" type="text" name="name" placeholder="De tener una sucursal ingresar la direccion." />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="input-box">
                                            <label className="label-text">Ciudad</label>
                                            <div className="form-group">
                                                <Select
                                                    value={this.selectedCity}
                                                    onChange={this.handleChangeCity}
                                                    placeholder="Seleccione la ciudad"
                                                    options={cities}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="input-box">
                                            <label className="label-text">Distrito</label>
                                            <div className="form-group">
                                                <Select
                                                    value={this.selectedState}
                                                    onChange={this.handleChangeState}
                                                    placeholder="Seleccione un Distrito"
                                                    options={states}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-6">
                                        <div className="input-box">
                                            <label className="label-text">
                                                Codigo Postal
                                            </label>
                                            <div className="form-group">
                                                <span className="la form-icon">
                                                    <BsFileCode />
                                                </span>
                                                <input className="form-control" type="text" name="text" placeholder="Codigo Postal (OPCIONAL)"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default AddLocation;