import React, {Component} from 'react';
import GeneralHeader from "../../components/common/GeneralHeader";
import ListingDetailsBreadcrumb from "./ListingDetailsBreadcrumb";
import ListingDetailsSidebar from "../../components/sidebars/ListingDetailsSidebar";
import ListingDetailsGallery from "../../components/sliders/ListingDetailsGallery";
import { BsCheckCircle } from 'react-icons/bs'
import { AiOutlinePlayCircle } from 'react-icons/ai'
import ModalVideo from 'react-modal-video'
import {Link} from "react-router-dom";
import GeneralMap from "../../components/contact/GeneralMap";
import CustomerFeedback from "../../components/sidebars/widgets/CustomerFeedback";
import ListingDetailsComments from "../../components/contact/ListingDetailsComments";
import ReviewFields from "../../components/contact/ReviewFields";
import PlaceOne from "../../components/places/PlaceOne";
import NewsLetter from "../../components/other/cta/NewsLetter";
import Footer from "../../components/common/footer/Footer";
import ScrollTopBtn from "../../components/common/ScrollTopBtn";

class ListingDetails extends Component {
    constructor() {
        super()
        this.state = {
            isOpen: false
        }
        this.openModal = this.openModal.bind(this)
    }
    openModal() {
        this.setState({ isOpen: true })
    }
    contentstate = {
        descTitle: 'Nosotros',
        desc: 'Nemo ucxqui officia voluptatem accu santium doloremque laudantium, totam rem ape dicta sunt dose explicabo. Nemo enim ipsam voluptatem quia voluptas. Excepteur sint occaecat cupidatat non proident, sunt in culpa kequi officia deserunt mollit anim id est laborum.',
        featureTitle: 'Formas de Pago',
        videoTitle: 'Video',
        flists: [
            {
                icon: <BsCheckCircle />,
                title: 'Pago en Efectivo'
            },
            {
                icon: <BsCheckCircle />,
                title: 'Tarjeta de Credito'
            },
            {
                icon: <BsCheckCircle />,
                title: 'Transferencia Bancaria'
            },
            
        ],
        videoImg: require('../../assets/images/img22.jpg'),
        buttonText: 'Ver Video',
        mapTitle: 'Ubicacion',
        peopleViewtitle: 'Otros Negocios'
    }
    render() {
        return (
            <main className="listing-details">
                {/* Header */}
                <GeneralHeader />

                {/* Breadcrumb */}
                <ListingDetailsBreadcrumb />

                <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='R2kiP9Qu7Pc' onClose={() => this.setState({ isOpen: false })} />
                <section className="single-listing-area padding-top-35px">
                    <div className="container">
                        <div className="row">
                        <div className="col-lg-4">
                                <ListingDetailsSidebar />
                            </div>
                            <div className="col-lg-8">
                                <div className="single-listing-wrap">
                                    <ListingDetailsGallery />

                                    <div className="listing-description padding-top-40px padding-bottom-35px">
                                        <h2 className="widget-title">
                                            {this.contentstate.descTitle}
                                        </h2>
                                        <div className="title-shape"></div>
                                        <div className="section-heading mt-4">
                                            <p className="sec__desc font-size-16">
                                                {this.contentstate.desc}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="video-listing padding-bottom-40px">
                                        <h2 className="widget-title">
                                            {this.contentstate.videoTitle}
                                        </h2>
                                        <div className="title-shape"></div>
                                        <div className="video__box margin-top-35px text-center">
                                            <img src={this.contentstate.videoImg} alt="video" />
                                            <div className="video__box-content">
                                                <Link className="mfp-iframe video-popup-btn video-play-btn"
                                                   to="#"
                                                   onClick={this.openModal}
                                                   title="Play Video">
                                                    <span className="d-inline-block">
                                                        <AiOutlinePlayCircle />
                                                    </span>
                                                </Link>
                                                <p className="video__desc">
                                                    {this.contentstate.buttonText}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="listing-map gmaps">
                                        <h2 className="widget-title">
                                            {this.contentstate.mapTitle}
                                        </h2>
                                        <div className="title-shape margin-bottom-35px"></div>
                                        <GeneralMap />
                                    </div>

                                    {/* <ContactInfo /> */}

                                    <CustomerFeedback />

                                    <div className="comments-wrap">
                                        <h2 className="widget-title">
                                            3 Reseñas
                                        </h2>
                                        <div className="title-shape"></div>
                                        <ListingDetailsComments />
                                    </div>

                                    <ReviewFields />

                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="card-area padding-top-80px padding-bottom-100px">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-heading">
                                    <h2 className="widget-title">
                                        {this.contentstate.peopleViewtitle}
                                    </h2>
                                    <div className="title-shape"></div>
                                </div>
                            </div>
                        </div>
                        <PlaceOne />
                    </div>
                </section>

                {/* Newsletter */}
                <NewsLetter />

                {/* Footer */}
                <Footer />

                <ScrollTopBtn />
            </main>
        );
    }
}

export default ListingDetails;