import { React, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from './../auth/AuthContext';
import { types } from './../types/types';



export const Navbar = () => {

    const {user: {name}, dispatch } = useContext(AuthContext);

    const handleLogout = () => {

        Swal.fire({
            title: 'Do you want logout?',
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: 'Logout',
            denyButtonText: `Cancel`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                dispatch({
                    type: types.logout,
                });
            } 
          })

    }

    return (
        

            <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark nav-masthead">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/home">Hero Teams App</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item me-1">
                    <NavLink className="nav-link" aria-current="page" to="/home">Search</NavLink>
                    </li>
                    <li className="nav-item me-1">
                    <NavLink className="nav-link" to="/team">My team</NavLink>
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