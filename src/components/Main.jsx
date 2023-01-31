import React, {useContext} from "react";
import Sparkle from 'react-sparkle'
import {ThemeContext} from "./themeContext";

function Main() {
    const {color, toggleTheme} = useContext(ThemeContext)

    return (
        <div className={`main ${color}-main`}>
            <Sparkle
                color={"yellow"}
                count={9}
                minSize={8}
                maxSize={25}
                overflowPx={30}
                fadeOutSpeed={15}
                newSparkleOnFadeOut={true}
                flicker={false}
                />
            <h2 className="main-title">Will you choose to click?</h2>
            <button 
                className={`${color}-button`}
                onClick={toggleTheme}
                >do not click</button>
        </div>
    )
}

export default Main;