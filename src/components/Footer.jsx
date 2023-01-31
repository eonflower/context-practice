import React, {useContext} from "react";
import {ThemeContext} from "./themeContext";

function Footer() {
    const {color} = useContext(ThemeContext)

    return (
        <div className={`footer ${color}-footer`}>
            <h3 className="footer-title">are you tired of my questions yet?</h3>
            <p className="warning">warning: link number  two may contain flashing images</p>
        </div>
    )
}

export default Footer;