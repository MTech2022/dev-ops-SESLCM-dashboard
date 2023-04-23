import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MarksDashboardComponent} from './marks-dashboard/marks-dashboard.component';

const routes: Routes = [
  { path: 'dashboard', component: MarksDashboardComponent },
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: '**', redirectTo: '/dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
