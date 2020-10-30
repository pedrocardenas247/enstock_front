import React from 'react';
import SignInOptions from "./SignInOptions";
import {Link} from "react-router-dom";
import { AiOutlineUser } from 'react-icons/ai'
import { FaRegEnvelope } from 'react-icons/fa'
import { FiLock } from 'react-icons/fi'

function SignUpBox({title, subtitle}) {
    return (
        <>
            <div className="billing-form-item mb-0">
                <div className="billing-title-wrap border-bottom-0 pr-0 pl-0 pb-0 text-center">
                    <h3 className="widget-title font-size-28 pb-0">
                        {title}
                    </h3>
                    <p className="font-size-16 font-weight-medium">
                        {subtitle}
                    </p>
                </div>
                <div className="billing-content">
                    <div className="contact-form-action">
                        <form method="post">
                            <div className="row">

                                <SignInOptions />

                                <div className="col-lg-12">
                                    <div className="account-assist mt-4 mb-4 text-center">
                                        <p className="account__desc">o</p>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="input-box">
                                        <label className="label-text">Nombre</label>
                                        <div className="form-group">
                                                <span className="form-icon">
                                                    <AiOutlineUser />
                                                </span>
                                            <input className="form-control" type="text" name="text" placeholder="Nombre" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="input-box">
                                        <label className="label-text">Apellido</label>
                                        <div className="form-group">
                                                <span className="form-icon">
                                                    <AiOutlineUser />
                                                </span>
                                            <input className="form-control" type="text" name="text" placeholder="Apellido" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="input-box">
                                        <label className="label-text">Username</label>
                                        <div className="form-group">
                                                <span className="form-icon">
                                                    <AiOutlineUser />
                                                </span>
                                            <input className="form-control" type="text" name="text" placeholder="Username" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="input-box">
                                        <label className="label-text">Email</label>
                                        <div className="form-group">
                                                <span className="form-icon">
                                                    <FaRegEnvelope />
                                                </span>
                                            <input className="form-control" type="email" name="text" placeholder="Escriba un email" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="input-box">
                                        <label className="label-text">Contraseña</label>
                                        <div className="form-group">
                                                <span className="form-icon">
                                                    <FiLock />
                                                </span>
                                            <input className="form-control" type="text" name="text" placeholder="Password" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="input-box">
                                        <label className="label-text">Confirmar Contraseña</label>
                                        <div className="form-group">
                                                <span className="form-icon">
                                                    <FiLock />
                                                </span>
                                            <input className="form-control" type="text" name="text" placeholder="Confirmar Contraseña" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <div className="custom-checkbox d-block mr-0">
                                            <input type="checkbox" id="chb13" />
                                            <label htmlFor="chb13">Acepto <Link to="#" className="color-text">las Politicas de Privacidad</Link></label>
                                        </div>
                                        <div className="custom-checkbox d-block mr-0">
                                            <input type="checkbox" id="chb14" />
                                            <label htmlFor="chb14">Acepto <Link to="#" className="color-text"> los Terminos y Condiciones</Link></label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="btn-box margin-top-20px margin-bottom-20px">
                                        <button className="theme-btn border-0" type="submit">
                                            Registrese
                                        </button>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <p className="font-weight-medium">
                                    ¿Ya tienes una cuenta? <Link to="/login" className="color-text">Mi Cuenta</Link>
                                    </p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SignUpBox;