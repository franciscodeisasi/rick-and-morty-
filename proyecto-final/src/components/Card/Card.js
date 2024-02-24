import { useState } from 'react';

import Description from '../Description/Description';

import "./Card.css"

export default function Card({infoPersonaje}) {

    let [hide,setHide]=useState(true);

    const showMore=()=>{
        setHide(false)
    }

    return(
       <div className="card m-2 p-2 d-flex flex-row justify-content-between align-items-center">
        <div className='d-flex flex-column justify-content-between align-items-center'>
            <img src={infoPersonaje.image}/>
            <h3 className='size-name text-center name-card'>{infoPersonaje.name}</h3>
            <button className="btn btn-success w-50 p-2 boton" onClick={showMore}>Know More...</button>
        </div>

        {
            hide === false? <Description status={infoPersonaje.status} especie={infoPersonaje.species} genero={infoPersonaje.gender} origen={infoPersonaje.origin.name} setHide={setHide}/>:''
        }

       </div>
    )
    
}

//le pasamos algo de informacion de cada personaje al componente "Description" la informacion que necesita para la lista 

//para lograr que se oculte o aparezca cuando se clickean los botones,vamos a usar eventos y operador ternario

//operador ternario condicion?accion-true:accion-false;