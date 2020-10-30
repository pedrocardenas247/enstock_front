import React from 'react'
import { Link } from 'react-router-dom'

const IcoList = ({url, className}) => {
    return (
        <>
            <Link to="/" className={className}>
                <img src={url} alt="Lista" />
            </Link>
        </>
    )
}

export default IcoList