import React, {Component} from 'react';
import { BsPencilSquare, BsQuestion, BsPencil } from 'react-icons/bs'
import { AiOutlineTags } from 'react-icons/ai'
import Select from "react-select";

const categories = [
    {
        value: 0,
        label: 'Seleccione una categoria'
    },
    {
        value: 2,
        label: 'Ropa'
    },
    {
        value: 3,
        label: 'Comida'
    },
    {
        value: 4,
        label: 'Tecnologia'
    },
    {
        value: 5,
        label: 'Regalos'
    },
    {
        value: 6,
        label: 'Hogar'
    },
    {
        value: 7,
        label: 'Mascota'
    },

]
class GeneralInfo extends Component {
    state = {
        title: 'Informacion del Negocio',
        selectedCatOp: null,
    }

    handleChangeCat = () => {
        const { selectedCatOp } = this.state;
        this.setState(
            { selectedCatOp }
        );
    }
    render() {
        return (
            <>
                <div className="billing-form-item">
                    <div className="billing-title-wrap">
                        <h3 className="widget-title pb-0">{this.state.title}</h3>
                        <div className="title-shape margin-top-10px"></div>
                    </div>
                    <div className="billing-content">
                        <div className="contact-form-action">
                            <form method="post">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="input-box">
                                            <label className="label-text">Nombre del Negocio</label>
                                            <div className="form-group">
                                                <span className="la form-icon">
                                                    <BsPencilSquare />
                                                </span>
                                                <input className="form-control" type="text" name="name" placeholder="Escriba el nombre de su negocio" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="input-box">
                                            <label className="label-text d-flex align-items-center ">RUC
                                                <i className="la tip ml-1" data-toggle="tooltip" data-placement="top" title="Ingrese su RUC (OPCIONAL)">
                                                    <BsQuestion />
                                                </i>
                                            </label>
                                            <div className="form-group">
                                                <span className="la form-icon">
                                                    <AiOutlineTags />
                                                </span>
                                                <input className="form-control" type="text" name="name" placeholder="Ingrese su RUC (OPCIONAL)" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="input-box">
                                            <label className="label-text">Descripcion de su negocio</label>
                                            <div className="form-group">
                                                <span className="la form-icon">
                                                    <BsPencil />
                                                </span>
                                                <textarea className="message-control form-control" name="message" placeholder="Ingrese una breve descripcion de su negocio"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="input-box">
                                            <label className="label-text">Categoria</label>
                                            <div className="form-group mb-0">
                                                <Select
                                                    value={this.selectedCatOp}
                                                    onChange={this.handleChangeCat}
                                                    placeholder="Seleccione una Categoria"
                                                    options={categories}
                                                />
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

export default GeneralInfo;