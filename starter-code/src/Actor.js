import React from "react";
import './Actor.css';


function Actor (props) {
    return (
        <div className="actor">
            <img src={props.src} width="200" alt="actor" />
            <h1>{props.name}</h1>
            <span>Rating: <strong>{props.rating}</strong></span>
            <button onClick={()=>{props.remove(props.index)}}>Delete</button>
        </div>
    );
}

export default Actor;