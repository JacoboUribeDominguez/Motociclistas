import React from 'react';
import "./styles.css";
import {tramosData, semanaData} from '../../data/tramos'
import Tramo from '../../components/tramo/tramo';
import {Card, Accordion, Button, Row, Col, Alert} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default class Principal extends React.Component{

    state = {
        tramos : tramosData,
        semana : semanaData
    }

    render(){
        return(
            <div className="d-flex flex-column align-items-center justify-content-center">
                <Alert className="mb-4" variant="warning">
                    Si no sabes cómo funciona esta aplicación de reserva de motociclistas, haz click <Link to="/ayuda">Aquí</Link>
                </Alert>
                <h3 style={{color:'#337ABC'}}>Reserva tu motociclista</h3>
                <Accordion className="mt-4" defaultActiveKey="0" style={{width:'550px'}}>
                    {this.state.semana.map(dia => 
                        <Card key={dia.id}>
                            <Card.Header className="" style={{padding:'0'}}>
                                <Accordion.Toggle className="day-toggle-accordion p-3 text-center" as={Button} variant="link" eventKey={dia.id}>
                                    {dia.dia}
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey={dia.id}>
                                <Card.Body>
                                    <Row className="d-flex align-items-center">
                                        {this.state.tramos.map(tramo => 
                                            <Col md={4} style={{width:'100%'}} key={tramo.id}>
                                                <Tramo dia={dia.dia} contador={tramo.contador} tramo={tramo}/>
                                            </Col>)
                                        }
                                    </Row>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    )
                    }
                    
                    </Accordion>
                {/*<Accordion defaultActiveKey="0">
                    {
                        this.state.semana.map(e => 
                            <Card key={e.id}>
                                <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                    {e.id}
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    h1
                                    {
                                        this.state.tramos.map(tramo => 
                                            
                                        )
                                    }
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        )
                    }
                </Accordion>*/}
            </div>
        )
    }
    
}