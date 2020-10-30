import React, {Component} from 'react';
import GeneralHeader from "../../components/common/GeneralHeader";
import Breadcrumb from "../../components/common/Breadcrumb";
import GeneralInfo from "../../components/addlisting/GeneralInfo";
import AddLocation from "../../components/addlisting/AddLocation";
import AddFullDetails from "../../components/addlisting/AddFullDetails";
import PhotoUploader from "../../components/addlisting/PhotoUploader";
import Amenities from "../../components/addlisting/Amenities";
import OpeningHours from "../../components/addlisting/OpeningHours";
import AddPrice from "../../components/addlisting/AddPrice";
import NewsLetter from "../../components/other/cta/NewsLetter";
import Footer from "../../components/common/footer/Footer";
import ScrollTopBtn from "../../components/common/ScrollTopBtn";
import {Link} from "react-router-dom";

class AddListing extends Component {
    states = {
        breadcrumbimg: require('../../assets/images/bread-bg.jpg')
    }
    render() {
        return (
            <main className="add-listing">
                {/* Header */}
                <GeneralHeader />

                {/* Breadcrumb */}
                <Breadcrumb CurrentPgTitle="Afilia tu Negocio" MenuPgTitle="Listings" img={this.states.breadcrumbimg} />

                {/* Add Listing */}
                <section className="add-listing-area padding-top-40px padding-bottom-100px">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-9 mx-auto">
                                <GeneralInfo />

                                <AddLocation />

                                <AddFullDetails />

                                <PhotoUploader />

                                <Amenities />

                                <OpeningHours />

                                

                                <div className="billing-form-item p-0 border-0 mb-0 shadow-none">
                                    <div className="billing-content p-0">
                                        <div className="custom-checkbox d-block mr-0">
                                            <input type="checkbox" id="privacy" />
                                            <label htmlFor="privacy">Acepto<Link to="#" className="color-text"> las politicas de privacidad</Link></label>
                                        </div>
                                        <div className="custom-checkbox d-block mr-0">
                                            <input type="checkbox" id="terms" />
                                            <label htmlFor="terms">Acepto<Link to="#" className="color-text"> los terminos y condiciones</Link>
                                            </label>
                                        </div>
                                        <div className="btn-box mt-4">
                                            <button type="submit" className="theme-btn border-0">Afiliar Negocio</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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

export default AddListing;