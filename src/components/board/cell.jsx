import "../../styles/cell.css";
import React from "react";

class Cell extends React.Component {
    constructor(props) {
        super(props);
        this.colorChange = this.colorChange.bind(this);
        this.changeThis = this.changeThis.bind(this);
    }

    render() {
        return (
            <div className="Cell" id={this.props.Id} onMouseOver={this.colorChange} onMouseDown={this.changeThis} />
        );
    }

    colorChange = (mouse) => {
        mouse.preventDefault();
        const color = this.getColor();
        const tool = this.getTool();
        if (mouse.buttons === 1) {
            document.getElementById(this.props.Id).style.backgroundColor = 
                (tool === "pen") ? color : "#ffffff";
        }
    }

    changeThis = (mouse) => {
        mouse.preventDefault();
        const color = this.getColor();
        const tool = this.getTool();
        document.getElementById(this.props.Id).style.backgroundColor = 
            (tool === "pen") ? color : "#ffffff";
    }

    getColor() {
        return (sessionStorage.getItem("brushcolor") === null) ? "#000000" : sessionStorage.getItem("brushcolor");
    }

    getTool() {
        return (sessionStorage.getItem("tool") === null) ? "pen" : sessionStorage.getItem("tool");
    }
}

export default Cell;
