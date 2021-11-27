import { React, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './../auth/AuthContext';
import { types } from './../types/types';



export const Navbar = () => {

    const {user: {name}, dispatch } = useContext(AuthContext);

    const handleLogout = () => {

        dispatch({
            type: types.logout,
        });

    }

    return (
        

            <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/home">Hero Teams App</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/home">Search</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/team">My team</Link>
                    </li>
                </ul>
                <span className="nav-item nav-item text-info">{name}</span>
                <button
                        className="btn btn-dark"
                        onClick={handleLogout} 
                    >
                        Logout
                </button>
                </div>
            </div>
            </nav>



        
    )
}