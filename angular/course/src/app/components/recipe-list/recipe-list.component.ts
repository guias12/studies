import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { RecipesService } from 'src/app/services/recipes.service';
import { Recipe } from 'src/app/model/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  //@Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[];

  constructor(private recipeService: RecipesService) {}

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }

  /*onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }*/
}
