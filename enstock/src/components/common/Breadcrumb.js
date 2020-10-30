import React from 'react';
import {} from "react-router-dom";

function Breadcrumb ({CurrentPgTitle, SubTitle, img}) {
    return (
        <>
            <section className="breadcrumb-area" style={{backgroundImage: 'url('+img+')'}}>
                <div className="breadcrumb-wrap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="breadcrumb-content">
                                    <h2 className="breadcrumb__title">
                                        {CurrentPgTitle}
                                    </h2>
                                    <h4>{SubTitle}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bread-svg">
                    <svg viewBox="0 0 500 150" preserveAspectRatio="none">
                        <path d="M-4.22,89.30 C280.19,26.14 324.21,125.81 511.00,41.94 L500.00,150.00 L0.00,150.00 Z" />
                    </svg>
                </div>
            </section>
        </>
    );
}

export default Breadcrumb;