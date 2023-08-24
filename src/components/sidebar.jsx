import "../styles/sidebar.css";
import React from "react";
import { BsFillPencilFill, BsFillEraserFill } from "react-icons/bs";

function Sidebar() {
    sessionStorage.setItem("brushcolor", "#000000");
    sessionStorage.setItem("tool", "pen");

    return (
        <div className="Sidebar">
            <a href="/#" onClick={() => changeTool("pen")}>
                <BsFillPencilFill size={30} id="pen" />
            </a>
            <a href="/#" onClick={() => changeTool("eraser")}>
                <BsFillEraserFill size={30} id="eraser" />
            </a>

            <input aria-label="color_picker" id="colorpicker" type="color" onChange={() => changeColor("colorpicker")} />
        </div>
    );
}

function changeColor(id) {
    const picker = document.getElementById(id);
    sessionStorage.setItem("brushcolor", picker.value);
}

function changeTool(tool) {
    sessionStorage.setItem("tool", tool);
    if (tool === "pen") {
        console.log("here");
        document.getElementById("pen").fill = "8b8b8d"
    }
}

export default Sidebar;
