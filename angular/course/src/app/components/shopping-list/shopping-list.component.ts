import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/model/ingredient.model';
import { ShoppingListService } from 'src/app/services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private igChangeSub: Subscription;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.igChangeSub = this.shoppingListService.ingredientsChanged.subscribe(
      (newIngredientsList: Ingredient[]) =>
        (this.ingredients = newIngredientsList)
    );
  }

  /*onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }*/

  ngOnDestroy(): void {
    this.igChangeSub.unsubscribe();
  }

  onEditItem(id: number) {
    this.shoppingListService.startedEdditing.next(id);
  }
}
