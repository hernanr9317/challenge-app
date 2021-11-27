import React from 'react';
import { Navbar } from '../components/ui/Navbar';
import { Switch, Route, Redirect } from 'react-router-dom';
import { HomeScreen } from './../components/home/HomeScreen';
import { TeamScreen } from './../components/myTeam/TeamScreen';



export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />

            <div className="container mt-2">
                <Switch>
                    <Route exact path="/home" component={HomeScreen} />

                    <Route exact path="/team" component={TeamScreen} />

                    <Redirect to="/home" />
                </Switch>

            </div>
        </>
    )
}
