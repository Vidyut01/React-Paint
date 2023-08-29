import "../../styles/sidebar.css";
import React from "react";
import { BsFillPencilFill, BsFillEraserFill } from "react-icons/bs";
import 'bootstrap/dist/css/bootstrap.css';

function Sidebar() {
    sessionStorage.setItem("brushcolor", "#000000");
    sessionStorage.setItem("tool", "pen");
    // let savedColors = getSavedColors();

    return (
        <div className="Sidebar">
            <button type="button" id="pen-fill" className="tool-button" onClick={() => changeTool("pen")}>
                <BsFillPencilFill size={30} id="pen" />
            </button>
            <button type="button" id="eraser-fill" className="tool-button" onClick={() => changeTool("eraser")}>
                <BsFillEraserFill size={30} id="eraser" />
            </button>

            <input aria-label="color_picker" id="colorpicker" type="color" onChange={() => changeColor("colorpicker")} />

            <button type="button" id="clear" className="btn btn-danger" onClick={clearBoard}>Clear</button>

            {/* <button type="button" id="color-add" className="btn btn-primary" onClick={addColor}>Add Color</button>

            {savedColors} */}


        </div>
    );
}

function changeColor(id) {
    const picker = document.getElementById(id);
    console.log(picker.value);
    sessionStorage.setItem("brushcolor", picker.value);
}

function changeTool(tool) {
    sessionStorage.setItem("tool", tool);
    
    if (tool === "pen") {
        document.getElementById("pen-fill").style.border = "inherit";
        document.getElementById("eraser-fill").style.border = "none";
    }
    else if (tool === "eraser") {
        document.getElementById("eraser-fill").style.border = "inherit";
        document.getElementById("pen-fill").style.border = "none";
    }

}

function clearBoard() {
    const cells = document.getElementsByClassName("Cell");
    for (let i = 0; i < cells.length; i++) {
        cells[i].style.backgroundColor = "#ffffff";
    }
}

// function addColor() {
//     const colorsString = localStorage.getItem("saved-colors");
//     let colors = [];
//     if (colorsString !== null) {
//         colors = JSON.parse(colorsString);
//     }

//     const currColor = sessionStorage.getItem("brushcolor");

//     for (let i = 0; i < colors.length; i++) {
//         if (colors[i] === currColor) return;
//     }

//     if (colors.length < 5) {
//         colors.push(currColor);
//     }
//     else {
//         for (let i = 0; i < colors.length - 1; i++) {
//             colors[i] = colors[i + 1];
//         }
//         colors[colors.length - 1] = currColor;
//     }
//     localStorage.setItem("saved-colors", JSON.stringify(colors));
//     console.log(colors);
// }

// function getSavedColors() {
//     const colorsString = localStorage.getItem("saved-colors");
//     if (colorsString === null) return [];

//     const colors = JSON.parse(colorsString);

//     let retArray = [];
//     let button = null;
//     for (let i = 0; i < colors.length; i++) {
//         button = <button href="#" onClick={() => {sessionStorage.setItem("brushcolor", colors[i]);}}>{colors[i]}</button>;
//         retArray.push(button);
//     }
//     return retArray;
// }

export default Sidebar;
