import React from "react";

export default function Links(props){
    return(
        <div>
            <a href={props.item.url}>{props.item.title}</a>
        </div>
    )
}