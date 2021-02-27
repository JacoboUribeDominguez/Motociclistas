import React, { useState } from 'react';
import "./styles.css";
import imgAyuda from './imgAyuda.jpg';
import {Row, Col, Accordion, Card} from 'react-bootstrap'

export default function Ayuda(){
    return(
        <div className="ayuda-container">
            <h1 className="title-ayuda">¿En que podemos ayudarte?</h1>
            <Row className="d-flex flex-row justify-content-center mt-5" style={{margin:'0'}}>
                <Col md={2} />
                <Col md={4} className="d-flex justify-content-center pb-5">
                    <Accordion defaultActiveKey="0" style={{width:'100%'}}>
                        <Card>
                            <Accordion.Toggle className="card-header" as={Card.Header} eventKey="0">
                                ¿Como funcionamos?
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                            <Card.Body className="card-body">
                                Nuestra interfáz de "Reservar" contiene tramos horarios de 30 minutos desde las 8:00 a.m. y 8:00 p.m.  <br />
                                Cada usuario pude hacer una reserva por tramo haciendo click en el tramo deseado (Quiere decir que es necesario registrarse). Cuando el tramo es seleccionado aparece color verde. Si se desea quitar la selección se le debe dar click de nuevo y aparece el color del resto de tramos no seleccionados (azúl). <br />
                                Si el tramo se encuentra en rojo, no se podrá seleccionar y significará que no hay motociclistas disponibles.
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Accordion.Toggle className="card-header" as={Card.Header} eventKey="1">
                            ¿Para qué sirve "Mis reservas"?
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="1">
                            <Card.Body className="card-body">
                                El apartado mis reservas tienen la función de clarificar cuáles motociclistas y de cuáles tramos han sido seleccionados.
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </Col>
                <Col md={4} className="d-flex justify-content-center" >
                    <div>
                        <img src={imgAyuda} alt="Imagen Ayuda" style={{width:'100%', borderRadius:'7px'}}/>
                    </div>
                </Col>
                <Col md={2} />
            </Row>
        </div>
    )
}