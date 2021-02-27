import React from 'react';
import "./styles.css";
import logoAccount from './user.png'
import flechaAbajo from './down.png'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default function Header(){
    /*return(
        <Navbar className="navbar-bg" expand="lg">
            { <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> }
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto" style={{color:'white'}}>
                    <Nav.Link>
                        <Link to="/" style={{textDecoration : 'none', color: 'white'}}>Reservar</Link>
                    </Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown" style={{backgroundColor:'#337ABC'}}>
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )*/
    
    return(
        <div className="container-header">
            <div className="row-ul">
                <Link to="/" className="col-li">
                    Reservar
                </Link>
                <div className="dropdown col-li">
                    <div style={{width:'100%', hegith:'100%'}}>
                        <div>
                            <img src={logoAccount} alt="logo" style={{width:'25px'}} />
                            <img src={flechaAbajo} alt="logo" style={{width:'14px'}} />
                        </div>
                    </div>
                    <div className="dropdown-content">
                        <Link to="/misreservas" className="active-link">
                            <div className="pb-3" style={{fontSize:'25px'}}>
                                Mis reservas
                            </div>
                        </Link>
                        <div style={{borderBottom:'1px solid #5D8FBE', margin:'0px 16px'}}/>
                        <Link to="/ayuda">
                            <div style={{fontSize:'15px'}}>
                                Ayuda
                            </div>
                        </Link>
                        <a href="#">
                            <div style={{fontSize:'15px'}}>
                                Cerrar sesión
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}