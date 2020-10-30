import React from 'react'
import { Link } from 'react-router-dom'

const AppBtnHome = ({url, className}) => {
    return (
        <>
            <Link to="/" className={className}>
                <img src={url} alt="Inicio" />
            </Link>
        </>
    )
}

export default AppBtnHome