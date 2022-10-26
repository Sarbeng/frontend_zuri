import React from "react";
import slack from '../assets/slack.svg'

export default function Links(props) {
    return (
        <section>

            <a href={props.item.url} className={` links ${props.item.css_id}`}>{props.item.title}</a>



        </section>
    )
}

