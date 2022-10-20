import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeResolverService } from '../app/shared/recipe-resolver.service';
import { RecipeDetailComponent } from './components/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './components/recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './components/recipe-start/recipe-start.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  {
    path: 'recipes',
    component: RecipeComponent,
    children: [
      { path: '', component: RecipeStartComponent },
      { path: 'new', component: RecipeEditComponent },
      {
        path: ':id',
        component: RecipeDetailComponent,
        resolve: [RecipeResolverService],
      },
      {
        path: ':id/edit',
        component: RecipeEditComponent,
        resolve: [RecipeResolverService],
      },
    ],
  },
  { path: 'shopping-list', component: ShoppingListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
