import { types } from './../components/types/types';

export const addTeamGoods = () => ({

    type: types.addTeamGoods

});

export const addTeamBads = () => ({

    type: types.addTeamBads
    
});

export const removeTeamGoods = () => ({

    type: types.removeTeamGoods
});

export const removeTeamBads = () => ({

    type: types.removeTeamBads
});

export const setTeam = ( character ) => ({
    type: types.setTeam,
    payload: character
});

export const removeTeam = ( filtredData ) => ({
    type: types.removeTeam,
    payload: filtredData
});
  
