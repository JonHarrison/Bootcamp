import React, { Component } from "react";

// class implementation
class Maths extends Component {

    constructor(props) {
        super(props);
        console.log(props);
        this.num1 = props.num1;
        this.operator = props.operator;
        this.num2 = props.num2;
    }

    render() {
        let value = NaN;
        switch(this.operator) {
            case '+':
                value = this.num1 + this.num2;
                break;
            case '-':
                value = this.num1 - this.num2;
                break;
            case '*':
                value = this.num1 * this.num2;
                break;
            case '/':
                value = this.num1 / this.num2;
                break;
            default:
                // oops
                break;
        }
        return <span style={{ fontSize: value}}>{value}</span>
    }
}

// function implementation

// function Maths(props) {
//     console.log(props);
//     const { num1, num2 } = props;
//     let value = NaN;
//     switch(props.operator) {
//         case '+':
//             value = num1 + num2;
//             break;
//         case '-':
//             value = num1 - num2;
//             break;
//         case '*':
//             value = num1 * num2;
//             break;
//         case '/':
//             value = num1 / num2;
//             break;
//         default:
//             // oops
//             break;
//     }
//     return <span style={{ fontSize: value}}>{value}</span>
// }

export default Maths;
