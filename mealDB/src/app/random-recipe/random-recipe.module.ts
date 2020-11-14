import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RandomRecipePageRoutingModule } from './random-recipe-routing.module';

import { RandomRecipePage } from './random-recipe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RandomRecipePageRoutingModule
  ],
  declarations: [RandomRecipePage]
})
export class RandomRecipePageModule {}
