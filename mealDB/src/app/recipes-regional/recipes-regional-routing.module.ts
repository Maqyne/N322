import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesRegionalPage } from './recipes-regional.page';

const routes: Routes = [
  {
    path: '',
    component: RecipesRegionalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipesRegionalPageRoutingModule {}
