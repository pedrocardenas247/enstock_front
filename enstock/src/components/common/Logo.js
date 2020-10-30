import React from 'react'
import { Link } from 'react-router-dom'

const Logo = ({url, className}) => {
    return (
        <>
        <div className ="nav-logo">
            <Link to="/" className={className}>
                <img src={url} alt="logo" />
            </Link>
        </div>
        </>
    )
}

export default Logo
