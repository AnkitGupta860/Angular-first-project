import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { shoppingListService } from "../shopping-list/shopping-list.service";
@Injectable()

export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();

    constructor(private slService : shoppingListService){}

    private recipes: Recipe[] = [
        new Recipe('Tasty Schnitzel',
        'A super-tasty Schnitzel - just awesome!',
        'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
        [
            new Ingredient('Meat',1),
            new Ingredient('French Fries',20)
        ]),
        new Recipe('Big Fat Burger',
        'What else you need to say',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-NpeN-cWcCKGV8zmoaD99cYvSABiuB64lWg&usqp=CAU',
        [
            new Ingredient('Buns',2),
            new Ingredient('Meat',1)
        ])
    ];
      
    addIngredientToShoppingList(ingredient: Ingredient[]){
        this.slService.addIngredients(ingredient);
    }

    getRecipes(){
        return this.recipes.slice();
    }

    
}