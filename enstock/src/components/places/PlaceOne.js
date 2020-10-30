import React, {Component} from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {IoMdStar, IoMdStarHalf} from 'react-icons/io'
import { AiOutlineEye } from 'react-icons/ai'
import {RiTShirt2Line } from 'react-icons/ri'
import { FiHeart } from 'react-icons/fi'

class PlaceOne extends Component {
    states = {
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
                title: 'Pizzas Carlitos',
                titleUrl: '/listing-details',
                stitle: 'Pizzas y Pastas',
                image: require('../../assets/images/img28.jpg'),
                cardType: 'Comida',
                cardTypeIcon: <RiTShirt2Line />,
                author: require('../../assets/images/client-logo2.png'),
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
                title: 'Devil Game',
                titleUrl: '/listing-details',
                stitle: 'De todo para Gamers',
                image: require('../../assets/images/img29.jpg'),
                cardType: 'Tecnologia',
                cardTypeIcon: <RiTShirt2Line />,
                author: require('../../assets/images/client-logo3.png'),
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
                title: 'Love Pets',
                titleUrl: '/listing-details',
                stitle: 'Alimentos y accesorios para mascotas',
                image: require('../../assets/images/img31.jpg'),
                cardType: 'Mascotas',
                cardTypeIcon: <RiTShirt2Line />,
                author: require('../../assets/images/client-logo5.png'),
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
                title: 'Clean House',
                titleUrl: '/listing-details',
                stitle: 'Productos de limpieza',
                image: require('../../assets/images/img33.jpg'),
                cardType: 'Hogar',
                cardTypeIcon: <RiTShirt2Line />,
                author: require('../../assets/images/client-logo5.png'),
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
                title: 'Todo Peluches',
                titleUrl: '/listing-details',
                stitle: 'Peluches a pedido',
                image: require('../../assets/images/img32.jpg'),
                cardType: 'Regalos',
                cardTypeIcon: <RiTShirt2Line />,
                author: require('../../assets/images/client-logo.png'),
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
                title: 'Eliana Shoes',
                titleUrl: '/listing-details',
                stitle: 'Zapatillas, botas, sandalias y mas',
                image: require('../../assets/images/img41.jpg'),
                cardType: 'Ropa y Accesorios',
                cardTypeIcon: <RiTShirt2Line />,
                author: require('../../assets/images/client-logo4.png'),
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
    responsive = {
        // breakpoint from 0 up
        0: {
            items: 1
        },
        // breakpoint from 480 up
        480: {
            items: 2
        },
        // breakpoint from 768 up
        768: {
            items: 3
        }
    }
    render() {
        return (
            <div className="row">
                <div className="col-lg-12">

                    <OwlCarousel
                        className="card-carousel mt-5"
                        loop
                        center={true}
                        margin={10}
                        autoplay={false}
                        nav={false}
                        dots={true}
                        items={3}
                        smartSpeed={1000}
                        animateOut={"slideOutDown"}
                        animateIn={"fadeIn"}
                        responsive={this.responsive}
                    >
                        {this.states.items.map((item, index) => {
                            return (
                                <div className="card-item" key={index}>
                                    <a href={item.titleUrl} className="card-image-wrap">
                                        <div className="card-image">
                                            <img src={item.image} className="card__img" alt="Place" />
                                            <span className={item.titleIcon ? 'badge': 'badge badge-closed' }>{item.bedge}</span>
                                            <span className="badge-toggle" data-toggle="tooltip" data-placement="bottom" title="22 Likes">
                                                <FiHeart />
                                            </span>
                                        </div>
                                    </a>
                                    <div className="card-content-wrap">
                                        <div className="card-content">
                                            <a href={item.titleUrl}>
                                                <h5 className="card-meta">
                                                    <span>{item.cardTypeIcon}</span> {item.cardType}
                                                </h5>
                                                <h4 className="card-title">{item.title}
                                                    <i>{item.titleIcon}</i>
                                                </h4>
                                                <p className="card-sub">
                                                    {item.stitle}
                                                </p>
                                            </a>
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
                            )
                        })}


                    </OwlCarousel>

                </div>
            </div>
        );
    }
}

export default PlaceOne;