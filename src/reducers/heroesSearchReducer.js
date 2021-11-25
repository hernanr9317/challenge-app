import { types } from './../components/types/types';

// const initialState = {loading: false};


export const heroesSearchReducer = ( state = {}, action) => {

    switch ( action.type ) {
        case types.loadingTrue:
            return {
                loading: action.payload.loading
            }
        
         case types.loadingFalse:
             return {
                 loading: action.payload.loading
             }   
    
        default:
            return state;
    }
}
