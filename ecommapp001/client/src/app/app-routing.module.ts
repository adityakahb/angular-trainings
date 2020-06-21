import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'prefix'
  },
  {
    path: 'search',
    redirectTo: 'search',
    pathMatch: 'prefix'
  },
  {
    path: 'detail',
    redirectTo: 'detail',
    pathMatch: 'prefix'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
