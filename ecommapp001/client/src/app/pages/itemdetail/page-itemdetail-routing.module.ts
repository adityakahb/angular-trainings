import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageItemdetailComponent } from './page-itemdetail.component';

const routes: Routes = [
  { path: 'detail', component: PageItemdetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageItemdetailRoutingModule { }
