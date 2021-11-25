
import { types } from './../components/types/types';

export const loadingTrue = () => {
    return {
        type: types.loadingTrue,
        payload: {
            loading: true
        }
    }    

}

export const loadingFalse = () => {
    return {
        type: types.loadingFalse,
        payload: {
            loading: false
        }
    }
}
