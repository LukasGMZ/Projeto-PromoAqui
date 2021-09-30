import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SemEstoquePage } from './sem-estoque.page';

const routes: Routes = [
  {
    path: '',
    component: SemEstoquePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SemEstoquePageRoutingModule {}
