/* globals $ */
(function () {
    'use strict';
    const recipeLoaderButton = $('#recipeOptionLoader');
    const radioButton1 = $('#recipe1id');
    const radioButton2 = $('#recipe2id');
    const radioButton3 = $('#recipe3id');
    const radioButtons = [radioButton1, radioButton2, radioButton3];
    const choice1 = $('#recipeChoice1');
    const choice2 = $('#recipeChoice2');
    const choice3 = $('#recipeChoice3');
    const choices = [choice1, choice2, choice3];
    const recipes = ['steak.json', 'pizza.json', 'pancakes.json'];
    const recipeName = $('#recipeName');
    const recipePic = $('#recipePic');
    const ingredients = $('#ingredients');

    recipeLoaderButton.click((async () => {
        try {
            const r = await fetch('recipes.json');
            if (!r.ok) {
                throw new Error(`${r.status} - ${r.statusText}`);
            }
            const loadedRecipes = await r.json();
            for (let i = 0; i < loadedRecipes.length; i++) {
                radioButtons[i].text(loadedRecipes[i].name);
            }
        } catch (e) {
            console.error(e);
        }
    }));
    for (let i = 0; i < choices.length; i++) {
        choices[i].on('change', async () => {
            try {
                const r = await fetch(recipes[i]);
                if (!r.ok) {
                    throw new Error(`${r.status} - ${r.statusText}`);
                }
                const loadedRecipes2 = await r.json();
                for (let i = 0; i < loadedRecipes2.length; i++) {
                    recipeName.text(loadedRecipes2[i].name);
                    recipePic.html(`<img src="${loadedRecipes2[i].pic}" alt="recipe image"></img>`);
                    ingredients.text(loadedRecipes2[i].ingredients);
                }
            } catch (e) {
                console.error(e);
            }
        });
    }
}());