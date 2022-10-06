import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from 'src/app/model/recipe.model';
import { RecipesService } from 'src/app/services/recipes.service';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  @Input() currentRecipe: Recipe;
  constructor(private recipeSerivce: RecipesService) {}

  ngOnInit(): void {}

  onAddToShoppingList() {
    this.recipeSerivce.addIngredientsToShoppingList(
      this.currentRecipe.ingredients
    );
  }
}
