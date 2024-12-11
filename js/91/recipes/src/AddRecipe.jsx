import React, { Component } from 'react'

export default class AddRecipe extends Component {

    state = {
        name: '',
        ingredients: '',
        directions: '',
        addRecipeShowing: false
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleAddRecipe = e => {
        const { name, ingredients, directions } = this.state;
        const recipe = { name: name, ingredients: ingredients, directions: directions }
        e.preventDefault();
        this.setState({ addRecipeShowing: !this.state.addRecipeShowing })
        this.props.addRecipe(recipe);
    }

    render() {
        const { name, ingredients, directions } = this.state;
        return (
            <form>
                <div>name:<input value={name} onChange={this.handleChange} name="name"></input></div>
                <div>ingredients:<input value={ingredients} onChange={this.handleChange} name="ingredients"></input></div>
                <div>directions:<input value={directions} onChange={this.handleChange} name="directions"></input></div>
                <button onClick={this.handleAddRecipe}>add recipe</button>
            </form>
        )
    }
}
