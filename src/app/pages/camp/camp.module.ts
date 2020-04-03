import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CampPageRoutingModule } from './camp-routing.module';

import { CampPage } from './camp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CampPageRoutingModule
  ],
  declarations: [CampPage]
})
export class CampPageModule {}
