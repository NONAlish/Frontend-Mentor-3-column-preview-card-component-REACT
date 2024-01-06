import "./Main.css"
import React, { useState } from "react";


export default function Main({main_text, text, button, backgroundColor}){
    const mainStyle = {
        backgroundColor: backgroundColor,
      };

      const [isHovered, setIsHovered] = useState(false);
    return (
        <main style={mainStyle}>
            <li>
                <h1>{main_text}</h1>
                <p>{text}</p>
                <button 
                    className={isHovered ? "hovered-button" : "normal-button"}
                    onMouseEnter={()=>setIsHovered(true)}
                    onMouseLeave={()=> setIsHovered(false)}
                >{button}</button>
            </li>
        </main>
    )
}