import { types } from './../components/types/types';

// const team = {
//     goods: 0,
//     bads: 0
// }

export const teamReducer = ( state={team: [], goods:0, bads:0}, action ) => {

    switch (action.type) {
        case types.addTeamGoods:
            return {
                ...state,
                goods: state.goods + 1
            }
            
            case types.addTeamBads:
                return {
                    ...state,
                    bads: state.bads + 1
                }

            case types.removeTeamGoods:
                return {
                    ...state,
                    goods: state.goods - 1
                }
            
            case types.removeTeamBads: 
                return {
                    ...state,
                    bads: state.bads - 1
                }

            case types.setTeam:
                return {
                    ...state,
                    team: [...state.team, action.payload]
                }
            
            case types.removeTeam:
                return {
                    ...state,
                    team: action.payload
                }    

        default:
            return state;
    }

}
