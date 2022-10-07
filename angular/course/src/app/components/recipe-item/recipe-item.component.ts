import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from 'src/app/model/recipe.model';
import { RecipesService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input() index: number;

  //@Output() recipeSelected = new EventEmitter<void>();
  constructor(private recipeService: RecipesService) {}

  ngOnInit(): void {}

  /*onSelected() {
    //this.recipeSelected.emit();
    this.recipeService.recipeSelected.emit(this.recipe);
  }*/
}
