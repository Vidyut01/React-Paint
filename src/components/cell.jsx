import "../styles/cell.css";
import React from "react";

class Cell extends React.Component {
    constructor(props) {
        super(props);
        this.colorChange = this.colorChange.bind(this);
        this.changeThis = this.changeThis.bind(this);
    }

    render() {
        return (
            <div className="Cell" id={this.props.Id} onMouseOver={this.colorChange} onMouseDown={this.changeThis}></div>
        );
    }

    colorChange = (mouse) => {
        const color = this.getColor();
        if (mouse.buttons === 1) {
            document.getElementById(this.props.Id).style.backgroundColor = color;
        }
    }

    changeThis = () => {
        const color = this.getColor();
        document.getElementById(this.props.Id).style.backgroundColor = color;
    }

    getColor() {
        return (sessionStorage.getItem("brushcolor") === null) ? "#000000" : sessionStorage.getItem("brushcolor");
    }
}

export default Cell;
