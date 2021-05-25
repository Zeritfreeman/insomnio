import React from 'react';
import './styles/causas.css'
import Cause from './cause'
import Sidetitle from './sidetitle'
import PageFooter from './pagefooter'
export default function Causas(){
    return (
        <div>
        <Sidetitle title="COMENTARIOS"></Sidetitle>
        <div className="causas">
            <div className="causascontainer">
                <Cause title = "LOREM IPSUM" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque obcaecati laborum, explicabo corporis ipsa eum dolor illum quidem, eos ea impedit ullam ex necessitatibus recusandae temporibus consectetur voluptatum repellat deleniti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque obcaecati laborum, explicabo corporis ipsa eum dolor illum quidem, eos ea impedit ullam ex necessitatibus recusandae temporibus consectetur voluptatum repellat deleniti." ></Cause>
                <Cause title = "LOREM IPSUM" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque obcaecati laborum, explicabo corporis ipsa eum dolor illum quidem, eos ea impedit ullam ex necessitatibus recusandae temporibus consectetur voluptatum repellat deleniti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque obcaecati laborum, explicabo corporis ipsa eum dolor illum quidem, eos ea impedit ullam ex necessitatibus recusandae temporibus consectetur voluptatum repellat deleniti." ></Cause>
                <Cause title = "LOREM IPSUM" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque obcaecati laborum, explicabo corporis ipsa eum dolor illum quidem, eos ea impedit ullam ex necessitatibus recusandae temporibus consectetur voluptatum repellat deleniti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque obcaecati laborum, explicabo corporis ipsa eum dolor illum quidem, eos ea impedit ullam ex necessitatibus recusandae temporibus consectetur voluptatum repellat deleniti." ></Cause>
                <Cause title = "LOREM IPSUM" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque obcaecati laborum, explicabo corporis ipsa eum dolor illum quidem, eos ea impedit ullam ex necessitatibus recusandae temporibus consectetur voluptatum repellat deleniti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque obcaecati laborum, explicabo corporis ipsa eum dolor illum quidem, eos ea impedit ullam ex necessitatibus recusandae temporibus consectetur voluptatum repellat deleniti." ></Cause>
            </div>
        </div>
        <PageFooter></PageFooter>
        </div>

    );
}