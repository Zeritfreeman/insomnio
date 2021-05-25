import React from 'react'
import './styles/comment.css'
import icon from '../imgs/iconopersona.png'
export default function UserComment(props) {
    return (

    <div className="comentario">
        <div className="texto">
            <h1>{props.name}</h1>
            <p>{props.txtcomment}</p>
        </div>
        <div className="imgcomentario">
            <img src={icon} alt=""></img>
        </div>
    </div>
    );
}