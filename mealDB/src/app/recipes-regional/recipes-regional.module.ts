import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecipesRegionalPageRoutingModule } from './recipes-regional-routing.module';

import { RecipesRegionalPage } from './recipes-regional.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecipesRegionalPageRoutingModule
  ],
  declarations: [RecipesRegionalPage]
})
export class RecipesRegionalPageModule {}
