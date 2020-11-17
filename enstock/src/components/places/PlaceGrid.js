import React, { useState, useEffect } from 'react';
import { getListStores } from "../../services/services";
import {IoMdStar, IoMdStarHalf} from "react-icons/io";
import {RiTShirt2Line} from "react-icons/ri";
import {FiHeart} from "react-icons/fi";
import {AiOutlineEye} from "react-icons/ai";
import {Link} from "react-router-dom";


const PlaceGrid = _ => {

    const [stores, setStores] = useState([])
    
    useEffect(() => {
        getListStores().then((rpta) => {
          setStores(rpta);
        });
      }, []);
      
        return (
            <>
                {stores.map(objStores => {
                    
                    return (
                        <div className="col-lg-4 column-td-6" key={objStores.category_match.id}>
                            <div className="card-item">
                                <Link to={objStores.category_match.slug} className="card-image-wrap">
                                    <div className="card-image">
                                        <img src={objStores.category_match.img1host} className="card__img" alt={objStores.category_match.slug} />
                                        <span className={objStores.icon_host ? 'badge': 'badge badge-closed' }>{objStores.bedge}</span>
                                        <span className="badge-toggle" data-toggle="tooltip" data-placement="bottom" title="22 Likes">
                                            <FiHeart />
                                        </span>
                                    </div>
                                </Link>
                                <div className="card-content-wrap">
                                    <div className="card-content">
                                        <Link to={objStores.titleUrl}>
                                            <h5 className="card-meta">
                                                <span><img src={objStores.icon_host} alt=""/></span> {objStores.description}
                                            </h5>
                                            <h4 className="card-title">{objStores.category_match.title}
                                                <i>{objStores.titleIcon}</i>
                                            </h4>
                                            <p className="card-sub">
                                                {objStores.description}
                                            </p>
                                        </Link>
                                        <a href={objStores.authorUrl} className="author-img">
                                            <img src={objStores.category_match.logo_host} alt={objStores.category_match.slug} />
                                        </a>

                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </>
        );
    }


export default PlaceGrid;