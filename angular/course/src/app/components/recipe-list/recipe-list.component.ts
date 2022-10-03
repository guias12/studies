import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/model/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A test',
      'this is a test',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg'
    ),
    new Recipe(
      'Rice',
      'White rice with seasoning',
      'https://img.itdg.com.br/tdg/images/recipes/000/000/770/323683/323683_original.jpg?w=1200'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
