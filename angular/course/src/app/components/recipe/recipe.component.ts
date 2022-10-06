import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/model/recipe.model';
import { RecipesService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
})
export class RecipeComponent implements OnInit {
  selectedRecipe: Recipe;
  constructor(private recipeService: RecipesService) {}

  ngOnInit(): void {
    this.recipeService.recipeSelected.subscribe(
      (recipe: Recipe) => (this.selectedRecipe = recipe)
    );
  }
}
