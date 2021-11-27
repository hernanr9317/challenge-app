import React, { useState } from 'react';
import { CalculateTeam } from '../ui/CalculateTeam';
import { useSelector, useDispatch } from 'react-redux';
import { removeTeam, removeTeamBads } from '../../actions/team';
import { removeTeamGoods } from './../../actions/team';
import { Card } from './../ui/Card';




export const TeamScreen = () => {

    const dispatch = useDispatch();

    const {goods: goodslenght, bads: badslenght, team: teamValues} = useSelector( state => state.team );

    const [removeStats, setRemoveStats] = useState(0);


    const handleRemove = (e,id) => {
    
        e.preventDefault();

        const removeStats = teamValues.find( item => item.id === id);

        setRemoveStats( removeStats.powerstats );
    
        const filtredData = teamValues.filter(item => item.id !== id);
    
        // setTeam1(filtredData);

        dispatch( removeTeam(filtredData) );


        if( removeStats.biography.alignment === "good"){  dispatch( removeTeamGoods() ) }
                  
        if( removeStats.biography.alignment === "bad"){  dispatch( removeTeamBads() )}

    }

    


    return (
        <>

        <div className="col">
                        <h2> My Team </h2>
                        <hr />

                        <CalculateTeam removeStats={removeStats} goods={goodslenght} bads={badslenght}/>
                        
                        <div className="row row-cols-1 row-cols-sm-2 m-auto">

                                { (teamValues) && teamValues.map( item =>(
                                    <div className="col-md-auto m-2" key={item.id}>
                                            <Card {...item}/>
                                            <button
                                                style={{width: 200}}
                                                type="button" 
                                                className="btn btn-outline-danger btn-sm mt-1" 
                                                onClick={ (e) => handleRemove(e, item.id)}
                                            >
                                                Remove
                                            </button>
                                    </div>      
                                ))}
                        </div>
                    </div>

    </>                
    )
}
