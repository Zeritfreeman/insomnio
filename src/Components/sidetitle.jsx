import React from 'react'

import './styles/sidetitle.css'

export default function Sidetitle(props){
    return(
        <div class="titulolado">
            <h1>{props.title}</h1>
        </div>
    );
}