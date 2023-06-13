import React from 'react';
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

export const Navbar = ({navTitle}) => {
    const { auth, setAuth } = useAuth();
    const navigate = useNavigate();
    // logout handler function
    function userLogout() {
        setAuth({});
        navigate('/login');
    }

    return (
        <nav className="header__cont flex-y">
            <h1 className="heading">{navTitle}</h1>
            <div className="lastContents" style={{ 'display': 'flex', flexDirection: 'row', alignContent: 'center' }}>
                <h5 className="mt-3 mr-3">{auth.user_name}</h5>
                <div className="flex-icons">
                    <div className="d-flex align-items-center justify-content-center dropdown">
                        <span data-bs-toggle="dropdown" aria-expanded="false" aria-haspopup="true" className="">
                            <img src="/media/user_profile1.png" alt="" className="profileIcon" width="46" />
                        </span>
                        <div tabIndex="-1" role="menu" aria-hidden="true" className="dropdownMenu dropdown-menu">
                            <button type="button" tabIndex="0" role="menuitem" className="dropdownItem dropdown-item">Profile</button>
                            <button onClick={userLogout} type="button" tabIndex="0" role="menuitem" className="dropdownItem dropdown-item">Logout</button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};
