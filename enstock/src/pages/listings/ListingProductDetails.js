import React, {Component} from 'react';
import GeneralHeader from "../../components/common/GeneralHeader";
import ListingDetailsProduct from "../../components/sliders/ListingDetailsProduct";
import PlaceOne from "../../components/places/PlaceOne";
import NewsLetter from "../../components/other/cta/NewsLetter";
import Footer from "../../components/common/footer/Footer";
import ScrollTopBtn from "../../components/common/ScrollTopBtn";
import Breadcrumb from '../../components/common/Breadcrumb';
import ListingProductSidebar from '../../components/sidebars/ListingProductSidebar';

class ListProductDetails extends Component {
    
    contentstate = {
        descTitle: 'Descripcion',
        desc: "TALLA XS: Busto: 88cm, Hombros: 36cm, Cintura: 84cm, Manga:58cm , Largo:68cm",
        desc1: "TALLA S: Busto: 92cm, Hombros: 37cm, Cintura: 88cm, Manga:59cm , Largo:70cm",
        desc2: "TALLA M: Busto: 96cm, Hombros: 38cm, Cintura: 92cm, Manga:60cm , Largo:73cm",
        desc3: "TALLA L: Busto: 100cm, Hombros: 39cm, Cintura: 96cm, Manga:61cm , Largo:75cm",
        peopleViewtitle: 'Otros Productos'
    }
    state = {
        breadcrumbimg: require('../../assets/images/bread-bg.jpg'),
    }
    render() {
        return (
            <main className="listing-details">
                {/* Header */}
                <GeneralHeader />

                {/* Breadcrumb */}
                <Breadcrumb CurrentPgTitle="Casaca Larga NAO195" MenuPgTitle="Listings" img={this.state.breadcrumbimg} />
                <section className="single-listing-area padding-top-0px">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="single-listing-wrap">
                                    <ListingDetailsProduct />

                                    <div className="listing-description padding-top-40px padding-bottom-35px">
                                        <h2 className="widget-title">
                                            {this.contentstate.descTitle}
                                        </h2>
                                        <div className="title-shape"></div>
                                        <div className="section-heading mt-4">
                                            <p >{this.contentstate.desc}</p>
                                            <p> {this.contentstate.desc1}</p>
                                            <p> {this.contentstate.desc2}</p>
                                             <p>{this.contentstate.desc3}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <ListingProductSidebar />
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

export default ListProductDetails;