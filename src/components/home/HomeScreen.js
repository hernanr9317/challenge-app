import { React, useState } from 'react';
import { Card } from '../ui/Card';
import { getDataAxios } from './../../helpers/getDataAxios';
import { CalculateTeam } from './../ui/CalculateTeam';
import { Spinner } from 'react-bootstrap';
import  Swal  from 'sweetalert2';


export const HomeScreen = () => {

    const [heroes, setHeroes] = useState([]);

    const [team, setTeam] = useState([]);

    const [checking, setChecking] = useState(false);
    
     
    const [inputValue, setInputValue] = useState('');
    
    const [removeStats, setRemoveStats] = useState(0);

    const [goods, setGoods] = useState(0);

    const [bads, setBads] = useState(0);

    
    
    const handleInputChange = ( e ) => {
        setInputValue( e.target.value );
    }
    
    
    const handleSubmit = (e) => {
    
        setChecking(true);

        e.preventDefault();
    
        getDataAxios(inputValue).then((data) => {
            
            setChecking(false);

            setHeroes(data);

       });

    }
    
    
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

                            if( (goods1.length < 3) && (item.biography.alignment === "good") ){ setGoods(goods1.length + 1); }

                            
                            if( (bads1.length < 3) && (item.biography.alignment === "bad") ){ setBads(bads1.length + 1); }
        }
         
    }
    
    const handleRemove = (e,id) => {
    
        e.preventDefault();

        const removeStats = team.find( item => item.id === id);

        setRemoveStats( removeStats.powerstats );
    
        const filtredData = team.filter(item => item.id !== id);
    
        setTeam(filtredData);

        if( removeStats.biography.alignment === "good"){ setGoods(goods - 1); }
                  
        if( removeStats.biography.alignment === "bad"){ setBads(bads - 1); }

    }


    
        return(
            <div className="container animate__animated animate__bounce animate__fadeIn">
                
                <h1>Build team</h1>
                <hr />
                
                <div className="row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2">
    
                    <div className="col">
                    <h2>Character search </h2>
                        <form onSubmit={ handleSubmit }
                        className="d-grid gap-2">
                            <input
                                className="form-control" 
                                type="text"
                                value={ inputValue }
                                onChange={ handleInputChange }
                            />
                            <button
                                type="submit" className="btn btn-primary" 
                                onClick={ handleSubmit}
                            >
                                    Search
                            </button>
                            { checking && 
                            
                                <div className="display-flex">
                                    <Spinner animation="border" variant="light" className="m-1"/>
                                    <Spinner animation="grow" variant="light" className="m-1"/>
                                    <Spinner animation="grow" variant="light" className="m-1"/>
                                </div>                  
                            }
                            
                        </form>
                    
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

                        <CalculateTeam team={team} removeStats={removeStats} goods={goods} bads={bads}/>
                        
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
