import { RecipeService } from './../recipe.service';
import { Recipe } from './../recipe.model';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  isMenuOpen = false;
  recipe: Recipe;
  id:number;
  constructor(private route:ActivatedRoute,private recipeService: RecipeService) { }

  ngOnInit() {
    this.route.params.subscribe(params=>{
      this.id = +params['id']
    });
    this.recipe = this.recipeService.getRecipe(this.id);
  }
  onAddToShoppingList(){
    this.recipeService.addIngredientToShoppingList(this.recipe.ingredients);
  }
}
