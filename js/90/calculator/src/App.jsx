import { Component } from 'react'
import './App.css'

export default class App extends Component {
  state = {
    val1: '',
    val2: '',
    operator: '',
    isValueOneEntered: false,
    operatorIsEntered: false
  }

  handleClick = (e) => {
    let { val1, val2 } = this.state;
    console.log(e);
    if (!this.state.isValueOneEntered) {
      this.setState({
        val1: val1 += e.target.innerText
      });
    } else if (this.state.operatorIsEntered) {
      this.setState({
        val2: val2 += e.target.innerText
      });
    }
  }

  operatorHandleClick = (e) => {
    console.log(e);
    this.setState({
      operator: e.target.innerText,
      isValueOneEntered: true,
      operatorIsEntered: true
    });
  }

  clearHandleClick = () => {
    this.setState({
      val1: '',
      val2: '',
      operator: '',
      isValueOneEntered: false,
      operatorIsEntered: false
    })
  }

  equalsHandleClick = (e) => {
    const { val1, val2, operator } = this.state
    console.log(e);
    if (operator === '+') {
      this.setState({
        val1: parseInt(val1) + parseInt(val2)
      });
    } else if (operator === '-') {
      this.setState({
        val1: parseInt(val1) - parseInt(val2)
      });
    } else if (operator === 'x') {
      this.setState({
        val1: parseInt(val1) * parseInt(val2)
      });
    } else if (operator === '÷') {
      this.setState({
        val1: parseInt(val1) / parseInt(val2)
      });
    }
    this.setState({
      val2: '',
      operator: '',
      operatorIsEntered: false
    })
  }

  render() {
    const { val1, val2, operator } = this.state;
    const numButtons = [];
    for (let i = 0; i < 10; i++) {
      numButtons.push(<button onClick={
        this.handleClick
      }>{i}</button>);
    }
    const operatorButtons = [];
    const operators = ['+', '-', 'x', '÷']
    for (let i = 0; i < operators.length; i++) {
      operatorButtons.push(<button onClick={
        this.operatorHandleClick
      }>{operators[i]}</button>);
    }
    return (
      <>
        {numButtons}
        {operatorButtons}
        <button onClick={
          this.equalsHandleClick
        }>=</button>
        <button onClick={
          this.clearHandleClick
        }>C</button>
        <div>{val1} {operator} {val2}</div>
      </>
    )
  }
}

