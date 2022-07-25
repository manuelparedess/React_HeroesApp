import React, { useContext } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';

export const Navbar = () => {

    const navigate = useNavigate();

    const { user, dispatch } = useContext(AuthContext);

    const handleLogout = () => {

        localStorage.removeItem('user', JSON.stringify(user));

        const action = {
            type: types.logout,
        }

        dispatch(action);

        navigate('/login', {
            replace: true
        })
    };

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">

            <Link
                className="navbar-brand mx-5 text-primary fw-bold"
                to="/"
            >
                UNIVERSE
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink
                        className={ ({ isActive }) => 'nav-item nav-link' + ( isActive ? ' active' : '' )}
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink
                        className={ ({ isActive }) => 'nav-item nav-link' + ( isActive ? ' active' : '' )}
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink
                        className={ ({ isActive }) => 'nav-item nav-link' + ( isActive ? ' active' : '' )}
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse mx-5 collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    
                    <span className='nav-item nav-link text-info'>
                        {user.name}
                    </span>

                    <button
                        className="nav-item nav-link btn"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}