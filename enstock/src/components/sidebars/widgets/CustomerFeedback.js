import React, {Component} from 'react';
import { MdStar, MdStarHalf } from 'react-icons/md'

class CustomerFeedback extends Component {
    states = {
        title: 'Valoracion de Compradores'
    }
    render() {
        return (
            <>
                <div className="review-content-wrap">
                    <h2 className="widget-title">
                        {this.states.title}
                    </h2>
                    <div className="title-shape"></div>
                    <div className="review-content padding-top-45px padding-bottom-40px">
                        <div className="review-rating-summary">
                            <div className="review-rating-summary-inner">
                                <div className="stats-average__count">
                                    <span className="stats-average__count-count">4.2</span>
                                </div>
                                <div className="stats-average__rating">
                                    <div className="rating-rating d-flex">
                                        <span className="la ml-0"><MdStar /></span>
                                        <span className="la ml-0"><MdStar /></span>
                                        <span className="la ml-0"><MdStar /></span>
                                        <span className="la ml-0"><MdStar /></span>
                                        <span className="la ml-0"><MdStarHalf /></span>
                                    </div>
                                    <p className="stats-average__rating-rating"> (233)</p>
                                </div>
                            </div>
                        </div>
                        <div className="review-rating-widget">
                            <div className="review-rating-rate">
                                <ul>
                                    <li className="review-rating-rate__items">
                                        <div className="review-rating-inner__item">
                                            <div className="review-rating-rate__item-text">5 estrellas</div>
                                            <div className="review-rating-rate__item-fill">
                                                <span className="review-rating-rate__item-fill__fill rating-fill-width1"></span>
                                            </div>
                                            <div className="review-rating-rate__item-percent-text">77 %</div>
                                        </div>
                                    </li>
                                    <li className="review-rating-rate__items">
                                        <div className="review-rating-inner__item">
                                            <div className="review-rating-rate__item-text">4 estrellas</div>
                                            <div className="review-rating-rate__item-fill">
                                                <span className="review-rating-rate__item-fill__fill rating-fill-width2"></span>
                                            </div>
                                            <div className="review-rating-rate__item-percent-text">54 %</div>
                                        </div>
                                    </li>
                                    <li className="review-rating-rate__items">
                                        <div className="review-rating-inner__item">
                                            <div className="review-rating-rate__item-text">3 estrellas</div>
                                            <div className="review-rating-rate__item-fill">
                                                <span className="review-rating-rate__item-fill__fill rating-fill-width3"></span>
                                            </div>
                                            <div className="review-rating-rate__item-percent-text">14 %</div>
                                        </div>
                                    </li>
                                    <li className="review-rating-rate__items">
                                        <div className="review-rating-inner__item">
                                            <div className="review-rating-rate__item-text">2 estrellas</div>
                                            <div className="review-rating-rate__item-fill">
                                                <span className="review-rating-rate__item-fill__fill rating-fill-width4"></span>
                                            </div>
                                            <div className="review-rating-rate__item-percent-text">5 %</div>
                                        </div>
                                    </li>
                                    <li className="review-rating-rate__items">
                                        <div className="review-rating-inner__item">
                                            <div className="review-rating-rate__item-text">1 estrella</div>
                                            <div className="review-rating-rate__item-fill">
                                                <span className="review-rating-rate__item-fill__fill rating-fill-width5"></span>
                                            </div>
                                            <div className="review-rating-rate__item-percent-text">2 %</div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default CustomerFeedback;