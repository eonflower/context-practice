import React, {useContext} from "react";
import {ThemeContext} from "./themeContext";

function Navbar() {
    const {color} = useContext(ThemeContext)

    return (
        <div className={`nav ${color}-nav`}>
            <h2 className="nav-title">Is it Time?</h2>
            <span className="nav-links">
                <li><a className={`${color}-link`} href="http://make-everything-ok.com/">click me!</a></li>
                <li><a className={`${color}-link`} href="http://www.staggeringbeauty.com/">or me?</a></li>
                <li><a className={`${color}-link`} href="http://endless.horse/">no me!</a></li>
            </span>
        </div>
    )
}

export default Navbar;