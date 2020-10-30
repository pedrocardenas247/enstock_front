import React, {Component} from 'react'
import GeneralHeader from '../../components/common/GeneralHeader'
import BannerOne from '../../components/banner/banner1/BannerOne'
import SectionsHeading from "../../components/common/SectionsHeading";
import PlaceOne from "../../components/places/PlaceOne";
import Button from "../../components/common/Button";
import ClientLogo from "../../components/sliders/ClientLogo";
import NewsLetter from "../../components/other/cta/NewsLetter";
import Footer from "../../components/common/footer/Footer";
import ScrollTopBtn from "../../components/common/ScrollTopBtn";
import GeneralMapHome from "../../components/contact/GeneralMapHome";


export default class Home extends Component {
    ctaimages = {
        images: [
            {
                img: require('../../assets/images/symble1.png')
            },
            {
                img: require('../../assets/images/symble2.png')
            },
            {
                img: require('../../assets/images/symble3.png')
            },
            {
                img: require('../../assets/images/symble4.png')
            }
        ]
    }

    tmimages = {
        tmimage: [
            {
                tmimg: require('../../assets/images/testi-img1.jpg')
            },
            {
                tmimg: require('../../assets/images/testi-img2.jpg')
            },
            {
                tmimg: require('../../assets/images/testi-img3.jpg')
            },
            {
                tmimg: require('../../assets/images/testi-img4.jpg')
            },
            {
                tmimg: require('../../assets/images/testi-img5.jpg')
            },
            {
                tmimg: require('../../assets/images/testi-img6.jpg')
            }
        ]
    }
    render() {
        return (
            <main className="home-1">
                {/* Header */}
                <GeneralHeader />

                {/* Hero Banner */}
                <BannerOne />
                {/* Mapview */}
                {/* <MapViewCluster /> */}
                <div className="gmaps_home">
                <GeneralMapHome />
                </div>
                {/* Most Visited Stores */}
                <section className="card-area cat-area text-center padding-bottom-50px">
                    <div className="container">
                        <div className="row section-title-width text-center">
                            <SectionsHeading title="Negocios mas buscados esta semana" />
                        </div>

                        <PlaceOne />
                    </div>
                </section>

                {/* CTA */}
                <section className="cta-area section-bg column-sm-center padding-top-80px padding-bottom-80px">
                    
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-9 text-left">
                                <SectionsHeading title="Únete GRATIS a enStock, el mejor lugar donde descubrir negocios!" titleClass=" mb-3 font-size-28"  />
                            </div>

                            <div className="col-lg-3">
                                <div className="btn-box">
                                    <Button text="Afiliar mi negocio" url="/add-listing" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                {/* Client Logo */}
                <ClientLogo />

                {/* NewsLetter */}
                <NewsLetter />

                {/* Footer */}
                <Footer />

                <ScrollTopBtn />
            </main>
        )
    }
}
