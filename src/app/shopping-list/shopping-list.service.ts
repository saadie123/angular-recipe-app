import { Ingredient } from './../shared/ingredient.model';
import { Injectable } from '@angular/core';

@Injectable()
export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient("Apples",5),
    new Ingredient("Tomatoes",10)
  ];
  constructor() { }

  getIngredients(){
    return this.ingredients;
  }
  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
  }

  addIngredients(ingredients: Ingredient[]){
    for (let ingredient of ingredients){
      this.addIngredient(ingredient);
    }
  }
}
