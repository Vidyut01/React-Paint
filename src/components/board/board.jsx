import "../../styles/board.css";
import Cell from "./cell";
import { useState } from "react";

function Board() {

    const [board, updateBoard] = useState(createBoard(64));
    console.log(board[0]);
    
    return (
        <div className="Board">
            {board}
            <button type="button" id="clear" className="btn btn-danger" onClick={() => {updateBoard(createBoard(32)); clearBoard();}}>Clear</button>
        </div>
    );
        
}
    
function createBoard(size) {  
    const board = [];
    let board2;
    
    for (let i = 0; i < size; i++) {
        board2 = [];
        for (let j = 0; j < size; j++) {
            board2.push(<Cell Id={i + "-" + j}/>);
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
