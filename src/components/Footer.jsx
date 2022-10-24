import React from "react";
import zuri from '../assets/zuri.svg'
import I4G from '../assets/I4G.svg'
import '../index.css'

export default function Footer() {
    return (
        <footer className="footer">

            <div className="footer-items">
                <img src={zuri} alt="" className="footer-left" />
                <p className="footer-mid" >HNG Internship 9 Frontend Task</p>
                <img src={I4G} alt="" className="footer-right" />

            </div>
        </footer>
    )
}