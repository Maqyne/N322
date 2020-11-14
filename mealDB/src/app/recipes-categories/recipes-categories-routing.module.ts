import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesCategoriesPage } from './recipes-categories.page';

const routes: Routes = [
  {
    path: '',
    component: RecipesCategoriesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipesCategoriesPageRoutingModule {}
