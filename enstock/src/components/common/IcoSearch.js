import React from 'react'
import { Link } from 'react-router-dom'

const IcoSearch = ({url, className}) => {
    return (
        <>
            <Link to="/" className={className}>
                <img src={url} alt="Buscar" />
            </Link>
        </>
    )
}

export default IcoSearch