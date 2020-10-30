import React from 'react'
import { Link } from 'react-router-dom'

const AppBtnList = ({url, className}) => {
    return (
        <>
            <Link to="/listing-grid" className={className}>
                <img src={url} alt="lista" />
            </Link>
        </>
    )
}

export default AppBtnList