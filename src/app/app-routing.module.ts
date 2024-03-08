import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardModule } from './modules/dashboard/dashboard.module';

const routes: Routes = [{ path: '', pathMatch: 'full', redirectTo: 'dashboard' },
{ path: 'dashboard', loadChildren: () => DashboardModule }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
