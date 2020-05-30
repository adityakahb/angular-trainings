import { DirectiveModule } from './../../directives/directive.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageSearchComponent } from './page-search.component';

const routes: Routes = [
  { path: 'search', component: PageSearchComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, DirectiveModule]
})
export class PageSearchRoutingModule { }
