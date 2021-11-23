import { React, useContext, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { types } from './../types/types';
import { AuthContext } from './../auth/AuthContext';
import { postFormAxios } from './../../helpers/postFormAxios';
import Swal from 'sweetalert2';
import { Spinner } from 'react-bootstrap';


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


                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Correct access',
                    showConfirmButton: false,
                    timer: 1000
                  });

	
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
        <div className="Loggin animate__animated animate__bounce animate__fadeIn">
            <div className="container text-dark">
                <div className="row justify-content-md-center">
                    <div className="card mt-5" style={{width: 450}}>
                        <div className="card-body"></div>
                            <h1>Hero Teams App</h1>
                            <Formik
                            initialValues={{ email: "challenge@alkemy.org", password: "react", }}
                            onSubmit={async (e) => {
                                await new Promise((resolve) => setTimeout(resolve, 500));

								data= (e);

                                handleSubmit(e);
                            }}
                            > 							

                            <Form>
                            <div className="mb-3">
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
                                <button type="submit" className="btn btn-primary w-100 m-1">Login</button> 

                                { (checking) && 
                                    <Spinner animation="border" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </Spinner>
                                }   
                            </Form>

						
                            </Formik>
                        </div>
                    </div>      
                </div>
            </div>

    );
}
 
