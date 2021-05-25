import React from 'react'
import UserComment from './comment'
import './styles/comentarios.css'
import Sidetitle from './sidetitle'
import PageFooter from './pagefooter'
export default function comentarios() {
    return (
        // <div class="titulolado">
        //     <h1>COMENTARIOS</h1>
        // </div>
        <div>
        <Sidetitle title="COMENTARIOS"></Sidetitle>
        <div className="comentarioscontenedor">
            
            <div className="contenedor">
                <UserComment name="Santiago" txtcomment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam iste ad iusto quibusdam incidunt tenetur, neque reprehenderit sint doloremque eligendi, laudantium esse molestiae a provident accusamus! Vero eius facere rem?"/>
                <UserComment name="Santiago" txtcomment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam iste ad iusto quibusdam incidunt tenetur, neque reprehenderit sint doloremque eligendi, laudantium esse molestiae a provident accusamus! Vero eius facere rem?"/>
                <UserComment name="Santiago" txtcomment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam iste ad iusto quibusdam incidunt tenetur, neque reprehenderit sint doloremque eligendi, laudantium esse molestiae a provident accusamus! Vero eius facere rem?"/>
                <UserComment name="Santiago" txtcomment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam iste ad iusto quibusdam incidunt tenetur, neque reprehenderit sint doloremque eligendi, laudantium esse molestiae a provident accusamus! Vero eius facere rem?"/>
            </div>
        </div>
        <PageFooter></PageFooter>
        </div>

    
    );
}