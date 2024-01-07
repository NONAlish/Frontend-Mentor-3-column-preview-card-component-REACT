import "./Main.css"
import React, { useState } from "react";


export default function Main({main_text, text, button, backgroundColor, style_btn, svg}){
    const mainStyle = {
        backgroundColor: backgroundColor,
      };

      const [isHovered, setIsHovered] = useState(false);
    return (
        <main style={mainStyle}>
            <li>
                <img className="svg" src={svg} alt="svg" />
                <h1>{main_text}</h1>
                <p>{text}</p>
                <button 
                    className={`${
                        isHovered ? style_btn : "normal-button"
                    }`}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    >
                    {button}
                </button>

            </li>
        </main>
    )
}