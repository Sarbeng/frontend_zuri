import React from "react";

export default function Links(props){
    return(
        <div>
            <a href={props.item.url} className={` links ${props.item.css_id}`}>{props.item.title}</a>
        </div>
    )
}