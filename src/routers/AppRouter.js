import  {React, useContext } from 'react';
import {
    BrowserRouter as Router,
    Switch,
  } from "react-router-dom";
  
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { DashboardRoutes } from './DashboardRoutes';
import { AuthContext } from './../components/auth/AuthContext';
import { FormLoginScreen } from './../components/login/FormLoginScreen';


export const AppRouter = () => {

    const { user } = useContext(AuthContext);


    return (
        <Router>
        <div>
            <Switch>
                <PublicRoute 
                    exact 
                    path="/login" 
                    component={ FormLoginScreen } 
                    isAuthenticated={user.logged}
                />
                
                <PrivateRoute  
                    path="/" 
                    component={ DashboardRoutes }
                    isAuthenticated={user.logged}
                />
            </Switch>
        </div>
        </Router>

    )
}
