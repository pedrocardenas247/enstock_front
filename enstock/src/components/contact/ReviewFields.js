import React, {Component} from 'react';
import { MdStar } from 'react-icons/md'
import { AiOutlineUser } from 'react-icons/ai'
import { FaRegEnvelope } from 'react-icons/fa'
import { BsPencil } from 'react-icons/bs'
import PhotoUploader2 from "../addlisting/PhotoUploader2";

class ReviewFields extends Component {
    states = {
        title: 'Agregar una Reseña',
    }
    render() {
        return (
            <>
                <div className="add-review-listing padding-top-50px" id="review">
                    <h2 className="widget-title">
                        {this.states.title}
                    </h2>
                    <div className="title-shape"></div>
                    <div className="section-heading padding-top-20px">
                        <p className="sec__desc font-size-16">
                            {this.states.subtitle}
                        </p>
                    </div>
                    <ul className="rating-list padding-top-20px">
                        <li>
                            <span className="la d-inline-block">
                                <MdStar />
                            </span>
                            <label className="review-label">
                                <input type="radio" name="review-radio" />
                                <span className="review-mark"></span>
                            </label>
                        </li>
                        <li>
                            <span className="la d-inline-block">
                                <MdStar />
                            </span>
                            <span className="la d-inline-block">
                                <MdStar />
                            </span>
                            <label className="review-label">
                                <input type="radio" name="review-radio" />
                                <span className="review-mark"></span>
                            </label>
                        </li>
                        <li>
                            <span className="la d-inline-block">
                                <MdStar />
                            </span>
                            <span className="la d-inline-block">
                                <MdStar />
                            </span>
                            <span className="la d-inline-block">
                                <MdStar />
                            </span>
                            <label className="review-label">
                                <input type="radio" name="review-radio" />
                                <span className="review-mark"></span>
                            </label>
                        </li>
                        <li>
                            <span className="la d-inline-block">
                                <MdStar />
                            </span>
                            <span className="la d-inline-block">
                                <MdStar />
                            </span>
                            <span className="la d-inline-block">
                                <MdStar />
                            </span>
                            <span className="la d-inline-block">
                                <MdStar />
                            </span>
                            <label className="review-label">
                                <input type="radio" name="review-radio" />
                                <span className="review-mark"></span>
                            </label>
                        </li>
                        <li>
                            <span className="la d-inline-block">
                                <MdStar />
                            </span>
                            <span className="la d-inline-block">
                                <MdStar />
                            </span>
                            <span className="la d-inline-block">
                                <MdStar />
                            </span>
                            <span className="la d-inline-block">
                                <MdStar />
                            </span>
                            <span className="la d-inline-block">
                                <MdStar />
                            </span>
                            <label className="review-label">
                                <input type="radio" name="review-radio" />
                                <span className="review-mark"></span>
                            </label>
                        </li>
                    </ul>
                    <div className="contact-form-action mt-5">
                        <form>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="input-box">
                                        <label className="label-text">Nombre</label>
                                        <div className="form-group">
                                            <span className="la form-icon"><AiOutlineUser /></span>
                                            <input className="form-control" type="text" name="name" placeholder="Nombre" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="input-box">
                                        <label className="label-text">Email</label>
                                        <div className="form-group">
                                            <span className="la form-icon"><FaRegEnvelope /></span>
                                            <input className="form-control" type="email" name="email" placeholder="Escribir Email" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="input-box">
                                        <label className="label-text">Reseña</label>
                                        <div className="form-group">
                                            <span className="la form-icon"><BsPencil /></span>
                                            <textarea className="message-control form-control" name="message" placeholder="Escribir mensaje"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="upload-btn-box">
                                        <form action="#" method="post" encType="multipart/form-data">

                                            <PhotoUploader2 />

                                            <button className="theme-btn border-0 margin-top-20px" type="submit" value="submit">
                                                Enviar Reseña
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </>
        );
    }
}
/* First tell me why you have used this in the responsive device*/
export default ReviewFields;