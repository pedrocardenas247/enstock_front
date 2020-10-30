import React, {Component} from 'react';
import {FiHeart} from "react-icons/fi";
import {Link} from "react-router-dom";
import Button from '../common/Button';

class PlaceTwoColumn extends Component {
    state = {
        items: [
            {
                title: 'Casaca Larga ',
                titleUrl: '/list-product',
                stitle: 'COD: NAO195',
                image: require('../../assets/images/img25.jpg'),
                price: '204',
            },
            {
                title: 'Casaca Larga ',
                titleUrl: '/list-product',
                stitle: 'COD: NAO195',
                image: require('../../assets/images/img25.jpg'),
                price: '204',
            },
            {
                title: 'Casaca Larga ',
                titleUrl: '/list-product',
                stitle: 'COD: NAO195',
                image: require('../../assets/images/img25.jpg'),
                price: '204',
            },
            {
                title: 'Casaca Larga ',
                titleUrl: '/list-product',
                stitle: 'COD: NAO195',
                image: require('../../assets/images/img25.jpg'),
                price: '204',
            },
            {
                title: 'Casaca Larga ',
                titleUrl: '/list-product',
                stitle: 'COD: NAO195',
                image: require('../../assets/images/img25.jpg'),
                price: '204',
            },
            {
                title: 'Casaca Larga ',
                titleUrl: '/list-product',
                stitle: 'COD: NAO195',
                image: require('../../assets/images/img25.jpg'),
                price: '204',
            },
            {
                title: 'Casaca Larga ',
                titleUrl: '/list-product',
                stitle: 'COD: NAO195',
                image: require('../../assets/images/img25.jpg'),
                price: '204',
            },
            {
                title: 'Casaca Larga ',
                titleUrl: '/list-product',
                stitle: 'COD: NAO195',
                image: require('../../assets/images/img25.jpg'),
                price: '204',
            },
        ]
    }
    render() {
        return (
            <>
                {this.state.items.map((item, index) => {
                    return (
                        <div className="col-lg-6 column-td-6" key={index}>
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
                                            <h4 className="card-title">{item.title}
                                                <i>{item.titleIcon}</i>
                                            </h4>
                                            <p className="card-sub">
                                                {item.stitle}
                                            </p>
                                        </Link>
                                    </div>
                                    <div className="rating-row">
                                        <div className="rating-rating">
                                        <div className="btn-box text-center">
                                        <Button text="Solicitar" url="/user-profile" className="d-block">
                                            <span className="d-inline-block"></span>
                                        </Button>
                                    </div>
                                        </div>
                                        <div className="listing-info">
                                            <ul>
                                                <li>S/.{item.price}</li>
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

export default PlaceTwoColumn;