import React, {Component} from 'react';
import {IoMdStar, IoMdStarHalf} from "react-icons/io";
import {RiTShirt2Line} from "react-icons/ri";
import {FiHeart} from "react-icons/fi";
import {AiOutlineEye} from "react-icons/ai";
import {Link} from "react-router-dom";

class PlaceGrid extends Component {
    state = {
        items: [
            {
                bedge: 'Mas Buscados',
                title: 'Bodega de Regalos',
                titleUrl: '/listing-details',
                stitle: 'Tienda de Ropa y Accesorios',
                image: require('../../assets/images/img30.jpg'),
                cardType: 'Ropa y Accesorios',
                cardTypeIcon: <RiTShirt2Line />,
                author: require('../../assets/images/small-team6.jpg'),
                authorUrl: '#',
                view: '204',
                ratings: [
                    <IoMdStar />,
                    <IoMdStar />,
                    <IoMdStar />,
                    <IoMdStarHalf />,
                    <IoMdStar className="last-star" />,
                ],
                ratingNum: '4.7'
            },
            {
                bedge: 'Mas Buscados',
                title: 'Bodega de Regalos',
                titleUrl: '/listing-details',
                stitle: 'Tienda de Ropa y Accesorios',
                image: require('../../assets/images/img30.jpg'),
                cardType: 'Ropa y Accesorios',
                cardTypeIcon: <RiTShirt2Line />,
                author: require('../../assets/images/small-team6.jpg'),
                authorUrl: '#',
                view: '204',
                ratings: [
                    <IoMdStar />,
                    <IoMdStar />,
                    <IoMdStar />,
                    <IoMdStarHalf />,
                    <IoMdStar className="last-star" />,
                ],
                ratingNum: '4.7'
            },
            {
                bedge: 'Mas Buscados',
                title: 'Bodega de Regalos',
                titleUrl: '/listing-details',
                stitle: 'Tienda de Ropa y Accesorios',
                image: require('../../assets/images/img30.jpg'),
                cardType: 'Ropa y Accesorios',
                cardTypeIcon: <RiTShirt2Line />,
                author: require('../../assets/images/small-team6.jpg'),
                authorUrl: '#',
                view: '204',
                ratings: [
                    <IoMdStar />,
                    <IoMdStar />,
                    <IoMdStar />,
                    <IoMdStarHalf />,
                    <IoMdStar className="last-star" />,
                ],
                ratingNum: '4.7'
            },
            {
                bedge: 'Mas Buscados',
                title: 'Bodega de Regalos',
                titleUrl: '/listing-details',
                stitle: 'Tienda de Ropa y Accesorios',
                image: require('../../assets/images/img30.jpg'),
                cardType: 'Ropa y Accesorios',
                cardTypeIcon: <RiTShirt2Line />,
                author: require('../../assets/images/small-team6.jpg'),
                authorUrl: '#',
                view: '204',
                ratings: [
                    <IoMdStar />,
                    <IoMdStar />,
                    <IoMdStar />,
                    <IoMdStarHalf />,
                    <IoMdStar className="last-star" />,
                ],
                ratingNum: '4.7'
            },
            {
                bedge: 'Mas Buscados',
                title: 'Bodega de Regalos',
                titleUrl: '/listing-details',
                stitle: 'Tienda de Ropa y Accesorios',
                image: require('../../assets/images/img30.jpg'),
                cardType: 'Ropa y Accesorios',
                cardTypeIcon: <RiTShirt2Line />,
                author: require('../../assets/images/small-team6.jpg'),
                authorUrl: '#',
                view: '204',
                ratings: [
                    <IoMdStar />,
                    <IoMdStar />,
                    <IoMdStar />,
                    <IoMdStarHalf />,
                    <IoMdStar className="last-star" />,
                ],
                ratingNum: '4.7'
            },
            {
                bedge: 'Mas Buscados',
                title: 'Bodega de Regalos',
                titleUrl: '/listing-details',
                stitle: 'Tienda de Ropa y Accesorios',
                image: require('../../assets/images/img30.jpg'),
                cardType: 'Ropa y Accesorios',
                cardTypeIcon: <RiTShirt2Line />,
                author: require('../../assets/images/small-team6.jpg'),
                authorUrl: '#',
                view: '204',
                ratings: [
                    <IoMdStar />,
                    <IoMdStar />,
                    <IoMdStar />,
                    <IoMdStarHalf />,
                    <IoMdStar className="last-star" />,
                ],
                ratingNum: '4.7'
            },
        ]
    }
    render() {
        return (
            <>
                {this.state.items.map((item, index) => {
                    return (
                        <div className="col-lg-4 column-td-6" key={index}>
                            <div className="card-item">
                                <Link to={item.titleUrl} className="card-image-wrap">
                                    <div className="card-image">
                                        <img src={item.image} className="card__img" alt="Place" />
                                        <span className={item.titleIcon ? 'badge': 'badge badge-closed' }>{item.bedge}</span>
                                        <span className="badge-toggle" data-toggle="tooltip" data-placement="bottom" title="22 Likes">
                                            <FiHeart />
                                        </span>
                                    </div>
                                </Link>
                                <div className="card-content-wrap">
                                    <div className="card-content">
                                        <Link to={item.titleUrl}>
                                            <h5 className="card-meta">
                                                <span>{item.cardTypeIcon}</span> {item.cardType}
                                            </h5>
                                            <h4 className="card-title">{item.title}
                                                <i>{item.titleIcon}</i>
                                            </h4>
                                            <p className="card-sub">
                                                {item.stitle}
                                            </p>
                                        </Link>
                                        <a href={item.authorUrl} className="author-img">
                                            <img src={item.author} alt="author-img" />
                                        </a>

                                    </div>
                                    <div className="rating-row">
                                        <div className="rating-rating">
                                            {item.ratings.map((rating, index) => {
                                                return (
                                                    <span key={index}>{rating}</span>
                                                )
                                            })}
                                            <span className="rating-count">{item.ratingNum}</span>
                                        </div>
                                        <div className="listing-info">
                                            <ul>
                                                <li><span className="info__count"><AiOutlineEye /></span> {item.view}</li>
                                                <li>
                                                    <span className="info__save" data-toggle="tooltip" data-placement="top" title="Bookmark">
                                                        <FiHeart />
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </>
        );
    }
}

export default PlaceGrid;