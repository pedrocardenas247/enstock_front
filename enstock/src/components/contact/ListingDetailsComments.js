import React, {Component} from 'react';
import { MdStar, MdStarHalf } from 'react-icons/md'
import { RiReplyLine } from 'react-icons/ri'
import { FiRefreshCw } from 'react-icons/fi'
import Button from "../common/Button";
import SectionDivider from "../common/SectionDivider";
import {Link} from "react-router-dom";

class ListingDetailsComments extends Component {
    states = {
        comments: [
            {
                img: require('../../assets/images/testi-img1.jpg'),
                name: 'Lucia Perez',
                date: 'Hace 2 dias',
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Curabitur non nulla sit amet nisl tempus',
                stars: [
                    <MdStar />,
                    <MdStar />,
                    <MdStar />,
                    <MdStar />,
                    <MdStarHalf />,
                ],
                replyBtn: 'Respuesta',
                replyBtnIcon: <RiReplyLine />,
                replyComments: [
                    {
                        img: require('../../assets/images/testi-img1.jpg'),
                        name: 'Alfredo Mesa',
                        date: 'Hace 3 dias',
                        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Curabitur non nulla sit amet nisl tempus',
                        stars: [
                            <MdStar />,
                            <MdStar />,
                            <MdStar />,
                            <MdStar />,
                            <MdStarHalf />,
                        ],
                        replyBtn: 'Respuesta',
                        replyBtnIcon: <RiReplyLine />,
                    }
                ]
            },
            {
                img: require('../../assets/images/testi-img1.jpg'),
                name: 'Rosa Diaz',
                date: 'Hace 4 dias',
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Curabitur non nulla sit amet nisl tempus',
                stars: [
                    <MdStar />,
                    <MdStar />,
                    <MdStar />,
                    <MdStar />,
                    <MdStar />,
                ],
                replyBtn: 'Respuesta',
                replyBtnIcon: <RiReplyLine />,
                replyComments: []
            }
        ]
    }
    render() {
        return (
            <>
                <ul className="comments-list padding-top-40px">
                    <li>

                        {this.states.comments.map((item, i) => {
                            return (
                                <>
                                    <div className="comment" key={i}>
                                        <img className="avatar__img" alt="Comment" src={item.img} />
                                        <div className="comment-body">
                                            <div className="meta-data">
                                                <span className="comment__author">
                                                    {item.name}
                                                </span>
                                                <span className="comment__date">
                                                    {item.date}
                                                </span>
                                                <div className="rating-rating">
                                                    {item.stars.map((star, index) => {
                                                        return <span key={index} className="la la-star">{star}</span>
                                                    })}
                                                </div>
                                            </div>
                                            <p className="comment-content">
                                                {item.content}
                                            </p>
                                            <div
                                                className="comment-reply d-flex justify-content-between align-items-center">
                                                <Link className="theme-btn comment__btn" to="#">
                                                    <i className="la d-inline-block">{item.replyBtnIcon}</i> {item.replyBtn}
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    {item.replyComments ? (
                                        item.replyComments.map((item2, index) => {
                                            return (
                                                <>
                                                    <ul className="comments-reply" key={index}>
                                                        <li>
                                                            <div className="comment">
                                                                <img className="avatar__img" alt="Comment" src={item2.img} />
                                                                <div className="comment-body">
                                                                    <div className="meta-data">
                                                                        <span className="comment__author">
                                                                            {item2.name}
                                                                        </span>
                                                                        <span className="comment__date">
                                                                            {item2.date}
                                                                        </span>
                                                                        <div className="rating-rating">
                                                                            {item2.stars.map((star, index) => {
                                                                                return <span key={index} className="la la-star">{star}</span>
                                                                            })}
                                                                        </div>
                                                                    </div>
                                                                    <p className="comment-content">
                                                                        {item2.content}
                                                                    </p>
                                                                    <div
                                                                        className="comment-reply d-flex justify-content-between align-item2s-center">
                                                                        <Link className="theme-btn comment__btn" to="#">
                                                                            <i className="la d-inline-block">{item2.replyBtnIcon}</i> {item2.replyBtn}
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </>
                                            )
                                        })
                                    ) : ''}

                                </>
                            )
                        })}
                    </li>
                </ul>
                <SectionDivider />
                <div className="button-shared padding-top-40px text-center">
                    <Button url="#" text="Mostrar mas Reseñas" className="border-0">
                        <FiRefreshCw />
                    </Button>
                </div>
            </>
        );
    }
}

export default ListingDetailsComments;