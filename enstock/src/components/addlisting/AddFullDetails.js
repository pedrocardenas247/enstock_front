import React, {Component} from 'react';
import { AiOutlineUser, AiOutlineFacebook, AiOutlineInstagram } from 'react-icons/ai'
import { FaRegEnvelope } from 'react-icons/fa'
import { FiPhone } from 'react-icons/fi'
import { BsLink45Deg } from 'react-icons/bs'

class AddFullDetails extends Component {

    render() {
        return (
            <>
                <div className="billing-form-item">
                    <div className="billing-title-wrap">
                        <h3 className="widget-title pb-0">Informacion de Contacto</h3>
                        <div className="title-shape margin-top-10px"></div>
                    </div>
                    <div className="billing-content">
                        <div className="contact-form-action">
                            <form method="post">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="input-box">
                                            <label className="label-text">Nombre de Propietario</label>
                                            <div className="form-group">
                                                <span className="la form-icon">
                                                    <AiOutlineUser />
                                                </span>
                                                <input className="form-control" type="text" name="name" placeholder="Ingrese nombre completo del propietario" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="input-box">
                                            <label className="label-text">Correo</label>
                                            <div className="form-group">
                                                <span className="la form-icon">
                                                    <FaRegEnvelope />
                                                </span>
                                                <input className="form-control" type="email" name="email" placeholder="Ingrese correo del negocio" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="input-box">
                                            <label className="label-text">Telefono <span className="text-muted">(optional)</span></label>
                                            <div className="form-group">
                                                <span className="la form-icon">
                                                    <FiPhone />
                                                </span>
                                                <input className="form-control" type="text" name="text" placeholder="Ingrese el Telefono del Negocio" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="input-box">
                                            <label className="label-text">Pagina Web <span className="text-muted">(opcional)</span></label>
                                            <div className="form-group">
                                                <span className="la form-icon">
                                                    <BsLink45Deg />
                                                </span>
                                                <input className="form-control" type="text" name="text" placeholder="Ingrese su pagina web" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="input-box">
                                            <label className="label-text">Facebook Link <span className="text-muted">(optional)</span></label>
                                            <div className="form-group">
                                                <span className="la form-icon">
                                                    <AiOutlineFacebook />
                                                </span>
                                                <input className="form-control" type="text" name="text" placeholder="https://www.facebook.com/" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="input-box">
                                            <label className="label-text">Instagram <span className="text-muted">(optional)</span></label>
                                            <div className="form-group">
                                                <span className="la form-icon">
                                                    <AiOutlineInstagram />
                                                </span>
                                                <input className="form-control" type="text" name="text" placeholder="https://www.instagram.com/" />
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="col-lg-6">
                                        <div className="input-box">
                                            <label className="label-text">Google Plus <span className="text-muted">(optional)</span></label>
                                            <div className="form-group">
                                                <span className="la form-icon">
                                                    <TiSocialGooglePlus />
                                                </span>
                                                <input className="form-control" type="text" name="text" placeholder="https://plus.google.com" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="input-box">
                                            <label className="label-text">Linkedin Link <span className="text-muted">(optional)</span></label>
                                            <div className="form-group">
                                                <span className="la form-icon">
                                                    <AiOutlineLinkedin />
                                                </span>
                                                <input className="form-control" type="text" name="text" placeholder="https://linkedin.com" />
                                            </div>
                                        </div>
                                    </div> */}
                                    {/* <div className="col-lg-12">
                                        <div className="input-box">
                                            <label className="label-text">Description</label>
                                            <div className="form-group mb-0">
                                                <span className="la form-icon">
                                                    <BsPencil />
                                                </span>
                                                <textarea className="message-control form-control" name="message" placeholder="Write description"></textarea>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default AddFullDetails;