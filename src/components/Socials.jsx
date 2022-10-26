import React from "react";
import slack from '../assets/slack.svg'
import github from '../assets/github.svg'

export default function Socials() {
    return (
        <div className="socials">
            <a href=""><img src={slack} alt="" /></a>
            <a href=""><img src={github} alt="" /></a>
        </div>
    )
}