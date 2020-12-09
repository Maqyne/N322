import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonalDexPage } from './personal-dex.page';

const routes: Routes = [
  {
    path: '',
    component: PersonalDexPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonalDexPageRoutingModule {}
