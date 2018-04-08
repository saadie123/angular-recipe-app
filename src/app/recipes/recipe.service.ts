import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Ingredient } from './../shared/ingredient.model';
import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe("A Test Recipe",
    "This is just a test recipe",
    "https://static01.nyt.com/images/2015/08/14/dining/14ROASTEDSALMON/14ROASTEDSALMON-articleLarge.jpg",
    [
      new Ingredient("Meat",1),
      new Ingredient("French Fries",20)
    ])
  ];
  constructor(private shoppingListService:ShoppingListService) { }
  getRecipes(){
    return this.recipes.slice();
  }
  addIngredientToShoppingList(ingredients: Ingredient[]){
    this.shoppingListService.addIngredients(ingredients); 
  }
}
