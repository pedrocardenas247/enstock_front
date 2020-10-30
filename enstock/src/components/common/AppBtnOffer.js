import React from 'react'
import { Link } from 'react-router-dom'

const AppBtnOffer = ({url, className}) => {
    return (
        <>
            <Link to="/listing-grid" className={className}>
                <img src={url} alt="ofertas" />
            </Link>
        </>
    )
}

export default AppBtnOffer