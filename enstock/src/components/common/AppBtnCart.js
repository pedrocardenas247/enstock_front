import React from 'react'
import { Link } from 'react-router-dom'

const AppBtnCart = ({url, className}) => {
    return (
        <>
            <Link to="/cart" className={className}>
                <img src={url} alt="carrito" />
            </Link>
        </>
    )
}

export default AppBtnCart