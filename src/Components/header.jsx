import React from 'react'
import { Link } from 'react-router-dom'
import './styles/header.css'

export default function Header() {
    return(
        <header>
        <div className="barra">
            <Link to="/"><h1>Insomnio</h1></Link>
            <Link to="/causas"><h3>Causas</h3></Link>
            <Link to="/"><h3>Consecuencias</h3></Link>
            <Link to="/"><h3>Soluciones</h3></Link>
        </div>
        </header>
    );
}