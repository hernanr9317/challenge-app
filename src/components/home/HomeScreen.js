import { React, useCallback, useState } from 'react';
import { Card } from '../ui/Card';
import { getDataAxios } from './../../helpers/getDataAxios';
import { CalculateTeam } from './../ui/CalculateTeam';
import { Spinner } from 'react-bootstrap';
import  Swal  from 'sweetalert2';
import { debounce } from './../../helpers/debounce';
import { useDispatch, useSelector } from 'react-redux';
import { loadingFalse, loadingTrue } from './../../actions/heroesSearch';
import { addTeamGoods, addTeamBads, removeTeamGoods, removeTeamBads } from './../../actions/team';


export const HomeScreen = () => {

    const dispatch = useDispatch();
    const {loading} = useSelector( state => state.heroesSearch );
    const {goods: goodslenght, bads: badslenght} = useSelector( state => state.team );


    const [heroes, setHeroes] = useState([]);

    const [team, setTeam] = useState([]);
         
    const [removeStats, setRemoveStats] = useState(0);

    

    const handleChange = (e) => {

        const {value} = e.target;

        if(value.length > 1){

            // setChecking(true);
            dispatch( loadingTrue() )

            getDataAxios(value).then((data) => {
                
                // setChecking(false);
                dispatch( loadingFalse() )
    
                setHeroes(data);
    
           });
        }else{
            setHeroes([]);
        }
    }
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const optimisedVersion = useCallback( debounce(handleChange, 500), [] );


    
    
    const handleAdd = (e,item) => {
        
        e.preventDefault();
        
        const goods1 = team.filter( pjs => pjs.biography.alignment === "good"); 
       
        const bads1 = team.filter( pjs => pjs.biography.alignment === "bad");
        
      
        if( team.find(pjs => pjs.id === item.id) ){
            Swal.fire({
                icon: 'info',
                title:'The character is already on the list'
            });  
            }else if( team.length >= 6){
                Swal.fire({
                    icon: 'info',
                    title:'Full team'
                });        
                        }else{

                            if( (goods1.length < 3) && (item.biography.alignment === "good") ){
                                setTeam([...team, item]);
                            }else if( (bads1.length < 3) && (item.biography.alignment === "bad") ){
                                setTeam([...team, item]);
                            }else {
                                Swal.fire({
                                    icon: 'info',
                                    title:'Good or Bad characters full'
                                });
                            }

                            if( (goods1.length < 3) && (item.biography.alignment === "good") ){ dispatch( addTeamGoods() ) }

                            
                            if( (bads1.length < 3) && (item.biography.alignment === "bad") ){ dispatch( addTeamBads() ) }
        }
         
    }
    
    const handleRemove = (e,id) => {
    
        e.preventDefault();

        const removeStats = team.find( item => item.id === id);

        setRemoveStats( removeStats.powerstats );
    
        const filtredData = team.filter(item => item.id !== id);
    
        setTeam(filtredData);

        if( removeStats.biography.alignment === "good"){  dispatch( removeTeamGoods() ) }
                  
        if( removeStats.biography.alignment === "bad"){  dispatch( removeTeamBads() )}

    }


    
        return(
            <div className="container animate__animated animate__bounce animate__fadeIn">
                
                <h1>Build team</h1>
                <hr />
                
                <div className="row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2">
    
                    <div className="col">

                    <div className="d-flex align-items-center">
                        <h2>Character search </h2>
                        { loading && 
                            
                        <div className="ms-auto">
                            <strong className="m-2">Loading...</strong>
                            <Spinner animation="border" variant="light" className="me-1 float-right"/>
                        </div>
         
                        }
                        
                    </div>
                        
    
                            <input 
                                type={`text`}
                                name={'search'}
                                placeholder={'Search Something...'}
                                className="form-control"
                                autoComplete = "off"
                                onChange={ optimisedVersion }
                            />
                            
                 
                    
                        <div className="row row-cols-1 row-cols-sm-2 m-auto">
                            { (heroes) && heroes.map( item =>(     
                                <div className="col-md-auto m-2" key={item.id}>
                                        <Card {...item}/>  
                                        <button
                                            style={{width: 200}}
                                            type="button" 
                                            className="btn btn-outline-primary btn-sm mt-1" 
                                            onClick={ (e) => handleAdd(e, item) }
                                        >
                                            Add
                                        </button>
                                </div>
                            ))}       
                        </div> 
                            { 
                                (!heroes) && 
                                    <div className="alert alert-danger d-flex align-items-center mt-1" role="alert">
                                        Characters not found.
                                </div>
                            }

                    </div>
    
                    <div className="col">
                        <h2> My Team </h2>

                        <CalculateTeam team={team} removeStats={removeStats} goods={goodslenght} bads={badslenght}/>
                        
                        <div className="row row-cols-1 row-cols-sm-2 m-auto">

                                { (team) && team.map( item =>(
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
    
    
                </div>
            </div>
        ) 

}
