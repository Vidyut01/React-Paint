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
        if (mouse.buttons === 1) {
            document.getElementById(this.props.Id).style.backgroundColor = "#000000";
        }
    }

    changeThis = () => {
        document.getElementById(this.props.Id).style.backgroundColor = "#000000";
    }
}

export default Cell;
