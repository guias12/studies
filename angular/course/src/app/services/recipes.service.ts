import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { Recipe } from '../model/recipe.model';
import { Ingredient } from '../model/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  recipeSelected = new Subject<Recipe>();
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    /*new Recipe(
      'Cheeseburger',
      'Burger with cheese',
      'https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Cheeseburger-1:1-3-product-tile-desktop?wid=829&hei=515&dpr=off',
      [new Ingredient('Meat', 1), new Ingredient('Bread', 2)]
    ),
    new Recipe(
      'Rice',
      'White rice with seasoning',
      'https://img.itdg.com.br/tdg/images/recipes/000/000/770/323683/323683_original.jpg?w=1200',
      [new Ingredient('Rice', 1), new Ingredient('Alho', 2)]
    ),*/
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
