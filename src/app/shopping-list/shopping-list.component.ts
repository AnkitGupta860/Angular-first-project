import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { shoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit{
  ingredients: Ingredient[];

  constructor(private shoppingList : shoppingListService){}

  ngOnInit(){
    this.ingredients = this.shoppingList.getIngredients();
    this.shoppingList.IngredientChange.subscribe(
      (ingredient: Ingredient[]) => {
      this.ingredients = ingredient
      }
    );
  }

  

}
