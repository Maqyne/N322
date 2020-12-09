import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NationalDexPageRoutingModule } from './national-dex-routing.module';

import { NationalDexPage } from './national-dex.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NationalDexPageRoutingModule
  ],
  declarations: [NationalDexPage]
})
export class NationalDexPageModule {}
