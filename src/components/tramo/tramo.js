import React, { Component } from 'react'
import "./styles.css"

export default class Tramo extends Component {

    constructor(props){
        super(props)
        this.state = {
            contador : props.contador,
            activo : false
        }
    }

    render(){

        const toggleOnClick = () => {

            const {dia, tramo} = this.props
            const fecha = dia +"/"+ tramo.tramo

            if(this.state.activo ){
                const peticion = async(fecha) => {
                    const obj = {
                        method: 'PUT',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(
                            { 
                                fecha: {fecha}
                            }
                        )
                    };
                    const result = await fetch(`http://localhost:4000/tramos/modificar`, obj);
                }
                peticion(fecha);
                this.setState({
                    contador : this.state.contador + 1
                })
    
            }else{ 
                const {dia, tramo} = this.props
                const fecha = dia +"/"+ tramo.tramo
                const tramoPost = tramo.tramo

                const peticion = async(fecha) => {
                    const obj = {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(
                            { 
                                fecha: {fecha}, 
                                tramo: {tramoPost}
                            }
                        )
                    };
                    const result = await fetch('http://localhost:4000/tramos/verificar', obj);
                }

                peticion(fecha);
                this.setState({
                    contador : this.state.contador - 1
                })
            }
    
            this.setState(
                {
                    activo : !this.state.activo
                }
            )
            
        }

        if(this.state.contador <= 0 && !this.state.activo){
            return(
                <div className="tramos-container mb-4">
                    <div className="tramo-disable p-4">
                        <h5 className="tramo-text">Motociclista {this.props.tramo.tramo}</h5>
                    </div>
                </div>
            )
        } else {
            return(
                <div className="tramos-container mb-4" onClick={toggleOnClick}>
                    <div className={this.state.activo ? "tramo-active p-4" : "tramo-inactive p-4"}>
                        <h5 className="tramo-text">Motociclista {this.props.tramo.tramo}</h5>
                    </div>
                </div>
            )
        }

        /*if(this.state.contador > 0){
            return(
                <div className="bcg-tramos px-4 py-5">
                    <div className="title-main-container">
                        <h1 className="title-main pb-5" > Reserva tu motociclista </h1>
                    </div>
                    <div className="tramos-container" onClick={toggleOnClick}>
                        <div className={this.state.activo ? "tramo-active p-4" : "tramo-inactive p-4"}>
                            <h5 className="tramo-text">Motociclista 8:00 a.m. - 8:30 a.m. {this.state.contador}</h5>
                        </div>
                    </div>
                </div>
            )
        } else {
            return(
                <div className="bcg-tramos px-4 py-5">
                    <div className="title-main-container">
                        <h1 className="title-main pb-5" > Reserva tu motociclista </h1>
                    </div>
                    <div className="tramos-container">
                        <div className="tramo-disable p-4">
                            <h5 className="tramo-text">Motociclista 8:00 a.m. - 8:30 a.m. {this.state.contador}</h5>
                        </div>
                    </div>
                </div>
            )
        }*/
    }
}