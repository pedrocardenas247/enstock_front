import React, {Component} from 'react';
import { AiOutlineUser } from 'react-icons/ai'
import { FaRegEnvelope } from 'react-icons/fa'
import { FiPhone } from 'react-icons/fi'
import { BsPencil } from 'react-icons/bs'
import {Link} from "react-router-dom";
import Button from '../../common/Button';

class PersonalInfo extends Component {
    state = {
        paymentImg: require('../../../assets/images/payment-img.png'),
        paypalImg: require('../../../assets/images/paypal.png'),
    }
    render() {
        return (
            <>
                <div className="billing-form-item">
                    <div className="billing-title-wrap">
                        <h3 className="widget-title pb-0">Informacion Personal</h3>
                        <div className="title-shape margin-top-10px"></div>
                    </div>
                    <div className="billing-content">
                        <div className="contact-form-action">
                            <form method="post">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="input-box">
                                            <label className="label-text">Nombre Completo</label>
                                            <div className="form-group">
                                                <span className="la form-icon"><AiOutlineUser /></span>
                                                <input className="form-control" type="text" name="text" placeholder="Ingrese su nombre y apellido" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="input-box">
                                            <label className="label-text">Direccion Exacta</label>
                                            <div className="form-group">
                                                <span className="la form-icon"><AiOutlineUser /></span>
                                                <input className="form-control" type="text" name="text" placeholder="Ingrese su direccion completa" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="input-box">
                                            <label className="label-text">Correo</label>
                                            <div className="form-group mb-0">
                                                <span className="la form-icon"><FaRegEnvelope /></span>
                                                <input className="form-control" type="email" name="text" placeholder="Ingrese su correo" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="input-box">
                                            <label className="label-text">Telefono</label>
                                            <div className="form-group mb-0">
                                                <span className="la form-icon"><FiPhone /></span>
                                                <input className="form-control" type="text" name="text" placeholder="Ingrese su telefono" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="payment-option">
                        <div className="billing-title-wrap pt-0">
                            <h3 className="widget-title pb-0">Elija el Metodo de Pago</h3>
                            <div className="title-shape margin-top-10px"></div>
                        </div>
                        <div className="payment-method-wrap p-4">
                            <div className="payment-tab">
                                <div className="payment-trigger">
                                    <label className="payment-radio">
                                        <input type="radio" name="radio" />
                                        <span className="checkmark"></span>
                                        <span>Pago al momento de la entrega</span>
                                        <div className="payment-content payment-active mt-2">
                                            <div className="section-heading">
                                                <p className="sec__desc font-size-15 line-height-24">
                                                    Se recomienda coordinar con el vendedor.
                                                </p>
                                            </div>
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <div className="payment-tab">
                                <div className="payment-trigger">
                                    <label className="payment-radio">
                                        <input type="radio" name="radio" />
                                        <span className="checkmark"></span>
                                        <span>Transferencia Bancaria</span>
                                        <div className="payment-content payment-active mt-2">
                                            <div className="section-heading">
                                                <p className="sec__desc font-size-15 line-height-24">
                                                    Puede realizar el pago con Transferencia, Plim o Yape
                                                </p>
                                            </div>
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <div className="payment-tab">
                                <div className="payment-trigger">
                                    <label className="payment-radio">
                                        <input type="radio" name="radio" />
                                        <span className="checkmark"></span>
                                        <span>Tarjeta de Credito o Debito</span>
                                        <span className="card-icon float-right">
                                            <img src={this.state.paymentImg} alt="Payment" />
                                        </span>
                                        <div className="payment-content payment-active mt-3">
                                            <div className="contact-form-action">
                                                <form>
                                                    <div className="row">
                                                        <div className="col-lg-6">
                                                            <div className="input-box">
                                                                <label className="label-text">Nombre en la Tarjeta</label>
                                                                <div className="form-group">
                                                                    <span className="la form-icon"><BsPencil /></span>
                                                                    <input className="form-control" placeholder="Nombre" type="text" name="text" required="" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div className="input-box">
                                                                <label className="label-text">Numero de Tarjeta</label>
                                                                <div className="form-group">
                                                                    <span className="la form-icon"><BsPencil /></span>
                                                                    <input className="form-control" name="text" placeholder="Ej: 1234  5678  9876  5432" required="" type="text" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4">
                                                            <div className="input-box">
                                                                <label className="label-text">Mes de Expiracion</label>
                                                                <div className="form-group">
                                                                    <span className="la form-icon"><BsPencil /></span>
                                                                    <input className="form-control" placeholder="MM" required="" name="text" type="text" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4">
                                                            <div className="input-box">
                                                                <label className="label-text">Año de Expiracion</label>
                                                                <div className="form-group">
                                                                    <span className="la form-icon"><BsPencil /></span>
                                                                    <input className="form-control" placeholder="YY" required="" name="text" type="text" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4">
                                                            <div className="input-box">
                                                                <label className="label-text">CVV</label>
                                                                <div className="form-group">
                                                                    <span className="la form-icon"><BsPencil /></span>
                                                                    <input className="form-control" placeholder="CVV" required="" name="text" type="text" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <div className="payment-tab">
                                <div className="payment-trigger">
                                    <label className="payment-radio paypal-option">
                                        <input type="radio" name="radio" />
                                        <span className="checkmark"></span>
                                        <span>Paypal</span>
                                        <span className="card-icon float-right">
                                            <img src={this.state.paypalImg} alt="Paypal" />
                                        </span>
                                        <div className="payment-content payment-active mt-2">
                                            <div className="section-heading">
                                                <p className="sec__desc font-size-15 line-height-24">
                                                    Sera redireccionado a PayPal para completar el pago.
                                                </p>
                                            </div>
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <div className="section-block-2 mt-4"></div>
                            <div className="btn-box mt-4">
                                <div className="custom-checkbox">
                                    <input type="checkbox" id="chb1" />
                                    <label htmlFor="chb1">
                                        He leido y Acepto los <Link to="#" className="color-text">Terminos y Condiciones</Link>
                                    </label>
                                </div>
                                {/* <button type="submit" to="/cart" className="theme-btn border-0 mt-3">
                                    Confirmar el Pedido
                                </button> */}
                                <Button text="Confirmar el Pedido" url="/order-success" />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default PersonalInfo;