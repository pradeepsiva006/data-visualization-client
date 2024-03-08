import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DataVisualizationComponent } from './data-visualization/data-visualization.component';
import { FileUploadModule } from 'primeng/fileupload';
import { HttpClientModule } from '@angular/common/http';
import { ChartModule } from 'primeng/chart';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DataVisualizationComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    DashboardRoutingModule,
    HttpClientModule,
    CheckboxModule,
    ChartModule,
    FileUploadModule
  ]
})
export class DashboardModule { }
