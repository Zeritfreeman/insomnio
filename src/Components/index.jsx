import React from 'react'
import { Link } from 'react-router-dom'
import './styles/index.css'
export default function Index(){
    return(
        <div className="insomnio">
            <div className="titulo">
                <h1>¿QUE ES EL INSOMNIO?</h1>
            </div>
            <div className="descripcion">
                <p>El insomnio es un trastorno del sueño común. Si tienes problemas para conciliar el sueño, quedarse dormido o los dos. Entonces estas en la  página adecuada.</p>
            </div>
            <Link to="/comentarios" >
                <div className="experiencia">
                <h1>
                    Cuentanos tu experiencia
                </h1>
                </div>
            </Link>
        </div>
    );
}