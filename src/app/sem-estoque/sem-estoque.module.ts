import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SemEstoquePageRoutingModule } from './sem-estoque-routing.module';

import { SemEstoquePage } from './sem-estoque.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SemEstoquePageRoutingModule
  ],
  declarations: [SemEstoquePage]
})
export class SemEstoquePageModule {}
