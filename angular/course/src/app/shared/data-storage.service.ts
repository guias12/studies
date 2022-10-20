import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../model/recipe.model';
import { RecipesService } from '../services/recipes.service';
import { map, tap } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  constructor(private http: HttpClient, private recipeSerive: RecipesService) {}

  storeRecipes() {
    const recipes = this.recipeSerive.getRecipes();
    this.http
      .put(
        'https://angular-course-f75e2-default-rtdb.firebaseio.com/recipes.json',
        recipes
      )
      .subscribe((resp) => {
        console.log(resp);
      });
  }

  fetchRecipes() {
    return this.http
      .get(
        'https://angular-course-f75e2-default-rtdb.firebaseio.com/recipes.json'
      )
      .pipe(
        map((recipes: Recipe[]) => {
          return recipes.map((recipe) => {
            return {
              ...recipe,
              ingredients: recipe.ingredients ? recipe.ingredients : [],
            };
          });
        }),
        tap((recipes: Recipe[]) => {
          this.recipeSerive.setRecipes(recipes);
        })
      );
  }
}
