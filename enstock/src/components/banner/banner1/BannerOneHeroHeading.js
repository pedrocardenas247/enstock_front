import React, {Component} from 'react'
import Logo from '../../common/Logo'

export default class BannerOneHeroHeading extends Component {
    state  = {
        title: 'Quieres comprar un(a): ',
        titleHighlight: [
            {
                active: true,
                text: 'Casaca'
            },
            {
                active: false,
                text: 'Case para Telefono'
            },
            {
                active: false,
                text: 'Pizza'
            },
            {
                active: false,
                text: 'Peluche'
            },
            {
                active: false,
                text: 'Mesa para Laptop'
            },
            {
                active: false,
                text: 'Hamburguesa'
            },
            {
                active: false,
                text: 'Gorro'
            },
            {
                active: false,
                text: 'Perfume'
            }
        ],
        
        logo: require('../../../assets/images/logo1.png'),
    }
    render() {
        return (
            <>
                <div className="hero-heading">
                <Logo url={this.state.logo}/>
                    <div className="section-heading">
                        
                        <h2 className="sec__title cd-headline zoom">
                            {this.state.title}
                            <span className="cd-words-wrapper">
                                {this.state.titleHighlight.map((item, index) => {
                                    return (
                                        <b className={item.active ? 'is-visible' : ' '} key={index}> {item.text}</b>
                                    )
                                })}
                            </span>
                        </h2>
                    </div>
                </div>
            </>
        )
    }
}
