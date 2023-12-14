import React, { Component } from "react";

class StateClassCom extends Component
{
    state={
        color:"Yellow",
        price:121
    }
    handleChange=()=>{this.setState({color:"Red"})}
    render()
    {
        return(
            <div>
                <h1>The color i have selected is {this.state.color} the price is {this.state.price}</h1>
                <button onClick={this.handleChange}>click me</button>
            </div>
        )
    }
}
export default StateClassCom;

