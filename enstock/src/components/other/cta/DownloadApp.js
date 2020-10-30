import React, {Component} from 'react';
import SectionsHeading from "../../common/SectionsHeading";
import Button from "../../common/Button";

export default class CtaOne extends Component {
    stateList = {
        img: require('../../../assets/images/mobile.png'),
    }
    render() {
        return (
            <>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 ml-auto">
                                <div className="mobile-app-content">
                                    <SectionsHeading title="Descargue la App!" titleClass="mb-3" desc="Le enviaremos un enlace, ábralo en su teléfono para descargar la aplicación." descClass="font-size-17 mb-4" />
                                    <ul className="download-list">
                                    <div className="form-group mb-0">
                                    <input className="form-control" type="text"
                                        placeholder="Ingrese su correo"/>
                                </div>
                                <div className="main-search-input-btn">
                        <button className="button theme-btn" type="submit">Enviar Enlace</button>
                    </div>
                                    </ul>
                                    <div className="btn-box text-left margin-top-40px">
                                        <Button url="#" className="download-btn">
                                        </Button>
                                        <Button url="#" className="download-btn">
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </>
        );
    }
}
