import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { RecipeService } from "../recipes/recipe.service";


export class shoppingListService {
    IngredientChange = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] =[
        new Ingredient('Apple',5),
        new Ingredient('Tomatoes',10),
    
      ];

    getIngredients(){
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.IngredientChange.emit(this.ingredients.slice());
      }

    addIngredients(ingredients : Ingredient[]){
      // for(let ingredient of ingredients){
        // this.addIngredient(ingredient);
        this.ingredients.push(...ingredients);
        this.IngredientChange.emit(this.ingredients.slice());
      }
    } 
