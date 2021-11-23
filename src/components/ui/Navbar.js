import { React, useContext } from 'react';
import { Link, NavLink} from 'react-router-dom';
import { AuthContext } from './../auth/AuthContext';
import { types } from './../types/types';

export const Navbar = () => {

    const {user: {name}, dispatch } = useContext(AuthContext);
    // const history = useHistory();

    const handleLogout = () => {

        // history.replace('/login')

        dispatch({
            type: types.logout,
        });

    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand m-2" 
                to="/HomeScreen"
            >
                Hero Teams App
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav m-1">

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/HomeScreen"
                    >
                        Home
                    </NavLink>

                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ms-auto m-1">

                <span className="nav-item nav-link text-info">
                    {name}
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