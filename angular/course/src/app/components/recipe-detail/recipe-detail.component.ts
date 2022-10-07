import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from 'src/app/model/recipe.model';
import { RecipesService } from 'src/app/services/recipes.service';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  currentRecipe: Recipe;
  id: number;
  constructor(
    private recipeSerivce: RecipesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = Number(params['id']);
      this.currentRecipe = this.recipeSerivce.getRecipe(this.id);
    });
  }

  onAddToShoppingList() {
    this.recipeSerivce.addIngredientsToShoppingList(
      this.currentRecipe.ingredients
    );
  }

  onEditRecipe() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }
}
