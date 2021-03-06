import { React, useContext, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { types } from './../types/types';
import { AuthContext } from './../auth/AuthContext';
import { postFormAxios } from './../../helpers/postFormAxios';
import Swal from 'sweetalert2';
import heroicon from '../../assets/heroicon.jpg'



export const FormLoginScreen = () => {

    const { dispatch } = useContext( AuthContext );

    const [checking, setChecking] = useState(false);

    
	let data;

	let response;
	
    
    const handleSubmit = () => {

        setChecking(true);
    
		postFormAxios(data).then( async resp => {


			response =  resp;

			if(response){
	

				dispatch({
					type: types.login,
					payload: {
						name: 'challenge@alkemy.org'
					}
				});
		

				localStorage.setItem('token', JSON.stringify(response.data.token));


                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                      toast.addEventListener('mouseenter', Swal.stopTimer)
                      toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                  })
                  
                  Toast.fire({
                    icon: 'success',
                    title: 'Signed in successfully'
                  })

	
			}else{

				Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Incorrect data.',
                  })

                  setChecking(false);  
			}

            
		});
    }


    return (
        <>
        <div className="form-signin Loggin animate__animated animate__bounce animate__fadeIn mt-5">
                <div className="row justify-content-md-center">
                            <h1 className="text-light text-center">Hero Teams App</h1>
                            <hr/>
                            <img className="mx-auto d-block rounded-circle" src={heroicon} alt="" style={{width: 200}}/>
                            <h1 className="h3 mb-3 mt-3 fw-normal">Please sign in</h1>
                            <Formik
                            initialValues={{ email: "challenge@alkemy.org", password: "react", }}
                            onSubmit={async (e) => {
                                await new Promise((resolve) => setTimeout(resolve, 500));

								data= (e);

                                handleSubmit(e);
                            }}
                            > 							

                            <Form>
                            
                            <div className="mb-3 ">
                                <label htmlFor="email" className="form-label">Email address</label>
                                    <Field 
                                        name="email" 
                                        type="email" 
                                        className="form-control" 
                                    />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                    <Field 
                                        name="password" 
                                        type="password" 
                                        className="form-control"
                                    />
                                    
                            </div>

                            { (!checking) && 
                            
                            <button className="w-100 btn btn-lg btn-primary" type="submit">Login</button>
                            
                            }
                                             

                                { (checking) && 
                                    <button className="w-100 btn btn-lg btn-primary" type="button" disabled>
                                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                        Loading...
                                    </button>
                                }

                                <p className="mt-5 mb-3 text-muted text-center">&copy; By Hernan Rascon 2021</p>     
                            </Form>					
                            </Formik>
                                      
                    </div>        
            </div>


            </>

    )
}
 
