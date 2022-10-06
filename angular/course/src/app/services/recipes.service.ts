import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../model/recipe.model';
import { Ingredient } from '../model/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Cheeseburger',
      'Burger with cheese',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg',
      [new Ingredient('Meat', 1), new Ingredient('Bread', 2)]
    ),
    new Recipe(
      'Rice',
      'White rice with seasoning',
      'https://img.itdg.com.br/tdg/images/recipes/000/000/770/323683/323683_original.jpg?w=1200',
      [new Ingredient('Rice', 1), new Ingredient('Alho', 2)]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
