import { Component } from 'react'
import './App.css'

export default class App extends Component {
  state = {
    current1: '',
    current2: '',
    total: '',
    operator: '',
    isValueOneEntered: false
  }

  handleClick = (e) => {
    let {current1, current2} = this.state;
    console.log(e);
    if (!this.state.isValueOneEntered) {
      this.setState({
        current1: current1 += e.target.innerText
      });
    }else{
      this.setState({
        current2: current2 += e.target.innerText
      });
    }
  }

  operatorHandleClick = (e) => {
    console.log(e);
    this.setState({
      operator: e.target.innerText,
      isValueOneEntered: true
    });
  }

  clearHandleClick = () => {
    this.setState({
      current1: '',
      current2: '',
      operator: '',
      total: '',
      isValueOneEntered: false
    })
  }

  equalsHandleClick = (e) => {
    const { current1, current2, operator } = this.state
    console.log(e);
    if (operator === '+') {
      this.setState({
        total: parseInt(current1) + parseInt(current2)
      });
    } else if (operator === '-') {
      this.setState({
        total: parseInt(current1) - parseInt(current2)
      });
    } else if (operator === 'x') {
      this.setState({
        total: parseInt(current1) * parseInt(current2)
      });
    } else if (operator === '÷') {
      this.setState({
        total: parseInt(current1) / parseInt(current2)
      });
    }

  }

  render() {
    const display = this.state.total;
    const {current1, current2, operator} = this.state;
    return (
      <>
        <button onClick={
          this.handleClick
        }>1</button>
        <button onClick={
          this.handleClick
        }>2</button>
        <button onClick={
          this.handleClick
        }>3</button>
        <button onClick={
          this.handleClick
        }>4</button>
        <button onClick={
          this.handleClick
        }>5</button>
        <button onClick={
          this.handleClick
        }>6</button>
        <button onClick={
          this.handleClick
        }>7</button>
        <button onClick={
          this.handleClick
        }>8</button>
        <button onClick={
          this.handleClick
        }>9</button>
        <button onClick={
          this.handleClick
        }>0</button>
        <button onClick={
          this.operatorHandleClick
        }>+</button>
        <button onClick={
          this.operatorHandleClick
        }>-</button>
        <button onClick={
          this.operatorHandleClick
        }>x</button>
        <button onClick={
          this.operatorHandleClick
        }>÷</button>
        <button onClick={
          this.equalsHandleClick
        }>=</button>
        <button onClick={
          this.clearHandleClick
        }>C</button>
        <div>{current1} {operator} {current2}</div>
        <div>{display}</div>
      </>
    )
  }
}

