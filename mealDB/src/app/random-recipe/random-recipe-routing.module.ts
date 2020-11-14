import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RandomRecipePage } from './random-recipe.page';

const routes: Routes = [
  {
    path: '',
    component: RandomRecipePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RandomRecipePageRoutingModule {}
