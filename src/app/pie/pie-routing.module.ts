import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PiePage } from './pie.page';

const routes: Routes = [
  {
    path: '',
    component: PiePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PiePageRoutingModule {}
