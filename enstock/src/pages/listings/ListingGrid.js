import React, { Component, useState, useEffect } from 'react';
import GeneralHeader from "../../components/common/GeneralHeader";
import Breadcrumb from "../../components/common/Breadcrumb";
import PlaceGrid from "../../components/places/PlaceGrid";
import Button from "../../components/common/Button";
import {FiRefreshCw} from "react-icons/fi";
import NewsLetter from "../../components/other/cta/NewsLetter";
import Footer from "../../components/common/footer/Footer";
import ScrollTopBtn from "../../components/common/ScrollTopBtn";
import StoresState from "../../context/stores/StoresState";

const ListingGrid = () => {
   
    const state = {
        bdimg: require('../../assets/images/bread-bg.jpg'),
    }
    
        return (
            <StoresState>
            <main className="listing-grid">
                {/* Header */}
                <GeneralHeader />

                {/* Breadcrumb */}
                <Breadcrumb CurrentPgTitle="Ropa y Accesorios" SubTitle="Tiendas" img={state.bdimg}/>

                {/* Place Grid */}
                <section className="card-area padding-top-40px padding-bottom-100px">
                    <div className="container">
                        <div className="row">
                        <PlaceGrid />
                        </div>

                        <div className="row">
                            <div className="col-lg-12">
                                <div className="button-shared mt-4 text-center">
                                    <Button text="Ver Mas" url="#">
                                        <span className="la">
                                            <FiRefreshCw />
                                        </span>
                                    </Button>
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
        </StoresState>
        );
    
}

export default ListingGrid;