import React, {Component} from 'react';
import GeneralHeader from "../../components/common/GeneralHeader";
import Breadcrumb from "../../components/common/Breadcrumb";
import PersonalInfo from "../../components/other/account/PersonalInfo";
import WidgetBookingProduct from "../../components/sidebars/widgets/WidgetBookingProduct";
import WidgetBookingSummary from "../../components/sidebars/widgets/WidgetBookingSummary";
import Footer from "../../components/common/footer/Footer";
import ScrollTopBtn from "../../components/common/ScrollTopBtn";

class Cart extends Component {
    state = {
        breadcrumbimg: require('../../assets/images/bread-bg.jpg'),
        img: require('../../assets/images/img25.jpg'),
        title: 'Casaca Larga NAO195',
        subtitle: 'Talla S - Color: Negro',
        cardLink: '/list-product',
        summaryTitle: 'Resumen de Pedido',
        summaryDate: 'S/.204',
        shippingCost: 'Gratis',
        payMethod: 'En efectivo',
        summaryChildren: '1',
        summaryTotal: '$204.00'
    }
    render() {
        return (
            <main className="booking-page">
                {/* Header */}
                <GeneralHeader/>

                {/* Breadcrumb */}
                <Breadcrumb CurrentPgTitle="Complete su Pedido" MenuPgTitle="pages" img={this.state.breadcrumbimg}/>

                {/* Personal Information */}
                <section className="booking-area padding-top-40px padding-bottom-80px">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                <WidgetBookingProduct
                                    img={this.state.img}
                                    title={this.state.title}
                                    subtitle={this.state.subtitle}
                                    cardType={this.state.cardType}
                                    cardLink={this.state.cardLink}
                                    cardTypeIcon={this.state.cardTypeIcon} />

                                <WidgetBookingSummary
                                    title={this.state.summaryTitle}
                                    date={this.state.summaryDate}
                                    hour={this.state.shippingCost}
                                    adults={this.state.payMethod}
                                    children={this.state.summaryChildren}
                                    total={this.state.summaryTotal} />
                            </div>
                            <div className="col-lg-8">
                                <PersonalInfo/>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <Footer />

                <ScrollTopBtn />

            </main>
        );
    }
}

export default Cart;