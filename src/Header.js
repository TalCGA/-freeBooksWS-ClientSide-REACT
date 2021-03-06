import React, {Component} from "react";
import {NavLink} from "react-router-dom";

class Header extends Component {
    active = {
        fontWeight: "bold",
        color: "red"
    };
    header = {
        display: "flex",
        justifyContent: "space-evenly",
        listStyle: "none"
    };
    render(){
        return (
            <div style={this.header}>
                <NavLink exact to="/" activeStyle={this.active}>
                Home
                </NavLink>
                <NavLink to="/ByName" activeStyle={this.active}>
                Books By Name
                </NavLink>
                <NavLink to="/ByDate" activeStyle={this.active}>
                Books By Date
                </NavLink>
            </div>
        );
    }
}

export default Header;