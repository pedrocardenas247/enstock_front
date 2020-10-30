import React, {Component} from 'react';
import { AiOutlinePrinter } from 'react-icons/ai'
import { RiReplyLine } from 'react-icons/ri'
import {Link} from "react-router-dom";

class Invoice extends Component {
    state  = {
        logo: require('../../assets/images/logo2.png')
    }
    render() {
        return (
            <main className="invoice-page">
                <section className="invoice-area padding-top-60px">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 mx-auto">
                                <div className="invoice-content">
                                    <div className="invoice-title">
                                        <h2 className="widget-title text-center mb-5">Gracias por su pedido</h2>
                                    </div>
                                    <div className="invoice-item">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="invoice-logo">
                                                    <img src={this.state.logo} alt="logo" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <ul className="invoice-details text-right">
                                                    <li><strong>Orden:</strong> #00124</li>
                                                    <li><strong>Fecha:</strong> 20/07/2019</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="invoice-item">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="invoice-title padding-top-40px padding-bottom-40px">
                                                    <h2 className="widget-title">Resumen de Pedido</h2>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="invoice-info">
                                                    <strong className="widget-title d-block pb-1">Datos del Comprador:</strong>
                                                    <ul className="invoice-details">
                                                        <li>Nombre: Juan Perez Gomez</li>
                                                        <li>Correo: jperez@hotmail.com</li>
                                                        <li>Telefono: 987 456 735</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="invoice-info">
                                                    <strong className="widget-title d-block pb-1">Direccion de Entrega:</strong>
                                                    <ul className="invoice-details">
                                                        <li>Av Venezuela 2463, Lima</li>
                                                        <li>Referencia:</li>
                                                        <li>Cerca al grifo Primax</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="invoice-item padding-top-40px">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="invoice-table table-responsive">
                                                    <table className="table-bordered w-100">
                                                        <thead>
                                                        <tr>
                                                            <th>Descripcion</th>
                                                            <th>Cantidad</th>
                                                            <th>Precio Uni.</th>
                                                            <th>Total</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        <tr>
                                                            <td>Casaca Larga NAO195</td>
                                                            <td>1</td>
                                                            <td>S/.204.00</td>
                                                            <td>S/.204.00</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Casaca Larga NAO134</td>
                                                            <td>1</td>
                                                            <td>S/.154.00</td>
                                                            <td>S/.154.00</td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 ml-auto">
                                                <div className="invoice-table mt-3 table-responsive">
                                                    <table className="w-100">
                                                        <tbody>
                                                        <tr>
                                                            <th className="pt-1 pb-0">Subtotal:</th>
                                                            <td className="pt-1 pr-0 text-right"><span>S/.360.00</span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th className="pt-1 pb-0">Costo de Envio:</th>
                                                            <td className="pt-1 pr-0 text-right"><span>0</span></td>
                                                        </tr>
                                                        <tr>
                                                            <th className="pt-1 pb-0">Total:</th>
                                                            <td className="pt-1 pr-0 text-right"><span>S/.360.00</span>
                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="btn-box mt-4 text-center">
                                    <a href="javascript:window.print()" className="theme-btn">
                                        <span className="la"><AiOutlinePrinter /></span> Imprimir
                                    </a>
                                    <Link to="/" className="theme-btn ml-2">
                                        <span className="la"><RiReplyLine /></span> Volver al Inicio
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        );
    }
}

export default Invoice;