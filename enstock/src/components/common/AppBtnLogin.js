import React from 'react'
import { Link } from 'react-router-dom'

const AppBtnLogin = ({url, className}) => {
    return (
        <>
            <Link to="/sign-up" className={className}>
                <img src={url} alt="Mi Cuenta" />
            </Link>
        </>
    )
}

export default AppBtnLogin