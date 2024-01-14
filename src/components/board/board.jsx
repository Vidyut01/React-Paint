import "../../styles/board.css";
import Cell from "./cell";
import { useState } from "react";

function Board() {

    const [board, updateBoard] = useState(createBoard(64));
    console.log(board[0]);
    
    return (
        <div className="Board">
            {board}
            <div className="options">
                <label for="sizes" id="sizes-lable">Board Size</label>
                <select id="sizes" className="form-select" onChange={(e) => {updateBoard(createBoard(e.target.value)); clearBoard();}}>
                    <option value="16">16x16px</option>
                    <option value="32">32x32px</option>
                    <option value="64">64x64px</option>
                    <option value="128">128x128px</option>
                </select>
            </div>
        </div>
    );  
}
    
function createBoard(size) {  
    const board = [];
    let board2;
    
    for (let i = 0; i < size; i++) {
        board2 = [];
        for (let j = 0; j < size; j++) {
            board2.push(<Cell Id={i + "-" + j} />);
        }
        board.push(<div className="rows" id={"row" + i}>{board2}</div>);
    }

    return board;

}

function clearBoard() {
    const cells = document.getElementsByClassName("Cell");
    for (let i = 0; i < cells.length; i++) {
        cells[i].style.backgroundColor = "#ffffff";
    }
}

export default Board;
