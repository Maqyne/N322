import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NationalDexPage } from './national-dex.page';

const routes: Routes = [
  {
    path: '',
    component: NationalDexPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NationalDexPageRoutingModule {}
