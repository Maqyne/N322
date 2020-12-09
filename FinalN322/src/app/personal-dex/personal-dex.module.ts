import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonalDexPageRoutingModule } from './personal-dex-routing.module';

import { PersonalDexPage } from './personal-dex.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonalDexPageRoutingModule
  ],
  declarations: [PersonalDexPage]
})
export class PersonalDexPageModule {}
