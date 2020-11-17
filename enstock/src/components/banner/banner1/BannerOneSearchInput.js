import React, {Component} from 'react'
import  { FiSearch } from 'react-icons/fi'
import Select from "react-select";
import IcoSearch from '../../common/IcoSearch';


const categories = [
    {
        value: 0,
        label: 'Ropa '
    },
    {
        value: 1,
        label: 'Comida'
    },
    {
        value: 2,
        label: 'Tecnologia'
    },
    {
        value: 3,
        label: 'Regalos'
    },
    {
        value: 4,
        label: 'Hogar'
    },
    {
        value: 5,
        label: 'Mascotas'
    },
    // {
    //     value: 6,
    //     label: 'Categoria 7'
    // },
    // {
    //     value: 7,
    //     label: 'Categoria 8'
    // },
    // {
    //     value: 8,
    //     label: 'Categoria 9'
    // },
    // {
    //     value: 9,
    //     label: 'Categoria 10'
    // },
    // {
    //     value: 10,
    //     label: 'Categoria 11'
    // }
]

export default class BannerOneSearchInput extends Component {
    state = {
        term: '',
        selectedCatOp: null,
        IcoSearch: require("../../../assets/images/ico_search.png"),
    }

    onFormSubmit = e => {
        e.preventDefault();
        this.props.onFormSubmit(this.state.term);
    }

    handleChangeCat = () => {
        const { selectedCatOp } = this.state;
        this.setState(
            { selectedCatOp }
        );
    }
    render() {
        return (
            <>
                <div className="main-search-input col-sm-12 col-md-12 col-lg-7 col-xl-7">

                    <div className="main-search-input-item">
                        <div className="contact-form-action">
                            <form onSubmit={this.onFormSubmit} action="">
                                <div className="form-group mb-0">
                                <span className="form-icon">
                                    <FiSearch/>
                                </span>
                                    <input
                                        className="form-control"
                                        type="text"
                                        value = {this.setState.term}
                                         onChange={e => this.setState({term: e.target.value})}
                                        placeholder="¿Que estas buscando?"/>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="main-search-input-item category col-3">
                        <Select
                            value={this.selectedCatOp}
                            onChange={this.handleChangeCat}
                            placeholder="Categoria"
                            options={categories}
                        />
                    </div>

                    <div className="main-search-input-btn">
                        <button className="button theme-btn" type="submit"><IcoSearch url={this.state.IcoSearch}/> </button>
                    </div>

                </div>
            </>
        )
    }
}
