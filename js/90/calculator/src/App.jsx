import { Component } from 'react'
import './App.css'

export default class App extends Component {
  state = {
    current: '0',
    total: '0',
    operator: null
  }

  handleClick = (e) => {
    console.log(e);
    this.setState({
      current: e.target.innerText
    });
  }

  operatorHandleClick = (e) => {
    console.log(e);
    this.setState({
      operator: e.target.innerText,
      total: this.state.current
    });
  }

  clearHandleClick = () => {
    this.setState({
      current: '0',
      total: '0'
    })
  }

  equalsHandleClick = (e) => {
    const {current, total, operator} = this.state
    console.log(e);
    if(operator === '+'){
      this.setState({
        total: parseInt(current) + parseInt(total)
      });
    }else if(operator === '-'){
      this.setState({
        total: parseInt(total) - parseInt(current)
      });
    }else if(operator === 'x'){
      this.setState({
        total: parseInt(current) * parseInt(total)
      });
    }else if(operator === '÷'){
      this.setState({
        total: parseInt(total) / parseInt(current)
      });
    }
    
  }

  render() {
    const display = this.state.total;
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
      <div>{display}</div>
      </>
    )
  }
}

