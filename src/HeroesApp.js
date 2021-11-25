import {React, useReducer, useEffect } from 'react';
import { Provider } from 'react-redux';    

import { AppRouter } from './routers/AppRouter';
import { AuthContext } from './components/auth/AuthContext';
import { authReducer } from './components/auth/authReducer';
import { store } from './store/store';


const init = () => {
    return JSON.parse(localStorage.getItem('user')) || { logged: false };
}

export const HeroesApp = () => {

    const [user, dispatch] = useReducer(authReducer, {}, init);

    useEffect(() => {
      localStorage.setItem('user', JSON.stringify(user))
    }, [user])

    return (

        <Provider store={store}> 
            <AuthContext.Provider value={{ user, dispatch }}>

                <AppRouter />

            </AuthContext.Provider>
        </Provider>
       
    )
}
