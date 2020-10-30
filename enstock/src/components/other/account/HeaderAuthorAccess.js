import React from 'react'
import App from '../../common/App';
import AppReg from '../../common/AppReg';

const HeaderAuthorAccess = () => {

    return (
        <>
            <div className="logo-right-content">
                <ul className="author-access-list">
                    <li>
                        <App/>
                        <span className="or-text">o</span>
                        <AppReg/>
                    </li>
                </ul>
            </div>
        </>
    )
}
export default HeaderAuthorAccess;