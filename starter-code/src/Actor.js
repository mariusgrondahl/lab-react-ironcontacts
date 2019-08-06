import React from "react";
import './Actor.css';


function Actor (props) {
    return (
        <div className="actor">
            <img src={props.src} width="200" alt="actor" />
            <h1>{props.name}</h1>
            <span>{props.rating}</span>
        </div>
    );
}

export default Actor;