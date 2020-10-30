import React from 'react'
import { Link } from 'react-router-dom'

const AppBtnChat = ({url, className}) => {
    return (
        <>
            <Link to="/chat" className={className}>
                <img src={url} alt="mensajes" />
            </Link>
        </>
    )
}

export default AppBtnChat