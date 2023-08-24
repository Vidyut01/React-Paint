import "../styles/sidebar.css";
import React, { useEffect, useState } from "react";
import { BsFillPencilFill, BsFillEraserFill } from "react-icons/bs";
import { HexColorPicker } from "react-colorful";

function Sidebar(props) {
    
    const [color, setColor] = useState("#aabbcc");

    return (
        <div className="Sidebar">
            <button href="#" onClick={changeColor.bind(this, "#000000")}>black</button>
            <button href="#" onClick={changeColor.bind(this, "#0000ff")}>blue</button>
            <BsFillPencilFill size={30} />
            <BsFillEraserFill size={30} />
            
            <HexColorPicker color={color} onChange={setColor} />
        </div>
    );
}

function changeColor(color) {
    sessionStorage.setItem("brushcolor", color);
}

export default Sidebar;
