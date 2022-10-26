import React from "react";
import slack from '../assets/slack.svg'

export default function Links(props) {
    return (
        <div className="btn">

           <button className="btn-links">
           <a href={props.item.url} className={` links ${props.item.css_id}`}>{props.item.title}</a>
           </button>



        </div>
    )
}

