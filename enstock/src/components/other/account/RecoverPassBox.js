import React, {Component} from 'react';
import {Link} from "react-router-dom";
import { FaRegEnvelope } from 'react-icons/fa'

class RecoverPassBox extends Component {
    render() {
        return (
            <>
                <section className="form-shared padding-top-40px padding-bottom-100px">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 mx-auto">
                                <div className="billing-form-item mb-0">
                                    <div className="billing-title-wrap">
                                        <h3 className="widget-title font-size-28">Recuperar Contraseña</h3>
                                        <p className="font-size-16 font-weight-medium">Ingrese el correo electrónico de su cuenta para restablecer la contraseña.

Luego recibirá un enlace al correo electrónico para restablecer la contraseña.Si tiene algún problema con el restablecimiento de la contraseña.
                                            <Link to="/contact" className="color-text"> Contactanos</Link>
                                        </p>
                                    </div>
                                    <div className="billing-content">
                                        <div className="contact-form-action">
                                            <form method="post">
                                                <div className="input-box">
                                                    <label className="label-text">Su Email</label>
                                                    <div className="form-group">
                                                        <span className="la form-icon"><FaRegEnvelope /></span>
                                                        <input className="form-control" type="email" name="text" placeholder="Enter email address" />
                                                    </div>
                                                </div>
                                                <div className="btn-box margin-top-20px margin-bottom-20px">
                                                    <button className="theme-btn border-0" type="submit">
                                                        Cambiar Contraseña
                                                    </button>
                                                </div>
                                                <p className="font-weight-medium">
                                                    <Link to="/login" className="color-text">Mi Cuenta </Link>
                                                    o
                                                    <Link to="/sign-up" className="color-text"> Registrese</Link>
                                                </p>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default RecoverPassBox;