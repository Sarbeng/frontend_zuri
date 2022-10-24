import React from "react";
import zuri from '../assets/zuri_logo.svg'
import I4G from '../assets/I4G.svg'

export default function Footer(){
    return(
        <footer>
            <div className="flex">
                <img src={zuri} alt="" />
                <p>HNG Internship 9 Frontend Task</p>
                <img src={I4G} alt="" />
             </div>
        </footer>
    )
}