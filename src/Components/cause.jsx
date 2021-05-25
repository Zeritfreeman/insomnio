import React from 'react';
import './styles/cause.css'
export default function Cause(props){
    return(

        <section>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </section>
    );
}