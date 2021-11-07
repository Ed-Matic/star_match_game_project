import React from "react";
import {color} from "./ColorTheme";

const PlayNumber  = props => 
(
    <button 

    className = "number" 
    style = { {backgroundColor: color[props.status] }}
    onClick = { () => props.onClick( props.numberId, props.status)}
    
    > 

    {props.numberId} 

    </button>
);

export default PlayNumber;