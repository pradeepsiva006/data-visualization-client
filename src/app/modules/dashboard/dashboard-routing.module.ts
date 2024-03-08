import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataVisualizationComponent } from './data-visualization/data-visualization.component';

const routes: Routes = [{ path: '', pathMatch: 'full', redirectTo: 'data-vis' },
{ path: 'data-vis', component: DataVisualizationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
