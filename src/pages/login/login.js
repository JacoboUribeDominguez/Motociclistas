import React, { Component } from 'react';

import {Row, Col, Form, Button} from 'react-bootstrap'

import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

import "./styles.css";

export default class Login extends Component{
    render(){

        const responseFacebook = (response) => {
            console.log(response);
        }
      
        const responseGoogle = (response) => {
            console.log(response);
        }

        return(
            <div className="m-4">
                <div className="container-bg-blue pt-3" style={{paddingBottom:'100px'}}>
                    <Row>
                        <Col md={2} />
                        <Col md={4} xs={12} className="d-flex flex-colum justify-content-center align-items-center">
                            <Form className="d-flex flex-column">
                                <h2 className="ingresaUsuario-title mt-4 mb-5 text-center">Iniciar Sesión</h2>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label className="ingresaUsuario-title">Ingresa su usuario</Form.Label>
                                    <Form.Control type="email" placeholder="Ingresa su usuario" />
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label className="ingresaUsuario-title">Ingrese su contraseña</Form.Label>
                                    <Form.Control type="password" placeholder="Ingrese su contraseña" />
                                </Form.Group>
                                <Button type="submit" className="button-login my-4">
                                    Ingresar
                                </Button>
                                <br />
                                <FacebookLogin
                                    className="mt-2"
                                    style={{height:'5% !important'}}
                                    appId="1515504915315233" 
                                    fields="name,email,picture"
                                    callback={responseFacebook}
                                />
                                <br />
                                
                                <GoogleLogin
                                    className="mt-2 mb-4"
                                    style={{height:'5% !important'}}
                                    clientId="" //CLIENTID NOT CREATED YET
                                    buttonText="LOGIN WITH GOOGLE"
                                    onSuccess={responseGoogle}
                                    onFailure={responseGoogle}
                                />
                            </Form>
                        </Col>
                        <Col md={4} xs={12} style={{borderLeft:'1px solid #235F95', paddingLeft:'6%'}}>
                        <Form className="d-flex flex-column">
                                <h2 className="ingresaUsuario-title mt-4 mb-5 text-center">Registrar</h2>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label className="ingresaUsuario-title">Nuevo usuario</Form.Label>
                                    <Form.Control type="email" placeholder="Digite aquí su nuevo usuario" />
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label className="ingresaUsuario-title">Digite el correo</Form.Label>
                                    <Form.Control type="email" placeholder="Digite aquí su correo" />
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label className="ingresaUsuario-title">Nueva contraseña</Form.Label>
                                    <Form.Control type="password" placeholder="Digite aquí su nueva contraseña" />
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label className="ingresaUsuario-title">Repita la contraseña</Form.Label>
                                    <Form.Control type="password" placeholder="Repita aquí la contraseña" />
                                </Form.Group>
                                <Button type="submit" className="button-login my-4">
                                    Registrarse
                                </Button>
                                <br />
                            </Form>
                        </Col>
                        <Col md={2} />
                    </Row>
                </div>
                <div className="mt-5 mx-5" style={{borderTop:'1px solid #BBBBBB', color: '#BBBBBB'}}>
                    <h5 className="text-center mt-3" style={{fontSize:'15px'}}>Esta página fue creada con la intención de contribuir el portafolio de mi persona Jacobo Uribe Domínguez</h5>
                </div>
            </div>
        );
    };
};