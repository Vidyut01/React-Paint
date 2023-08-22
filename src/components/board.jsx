import "../styles/board.css";
import Cell from "./cell";

function Board() {

    const board = createBoard(32);
    console.log(board[0]);
    
    return (
        <div className="Board">
            {board}
        </div>
    );
        
}
    
function createBoard(size) {  
    const board = [];
    let board2;
    
    for (let i = 0; i < size; i++) {
        board2 = [];
        for (let j = 0; j < size; j++) {
            // board2.push(<div className="cells" id={i + "-" + j}></div>);
            board2.push(<Cell Id={i + "-" + j}/>);
        }
        board.push(<div className="rows" id={"row" + i}>{board2}</div>);
    }

    return board;

}

export default Board;
