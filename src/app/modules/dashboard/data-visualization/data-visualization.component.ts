import { Component } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';
import { Subscription, interval, switchMap } from 'rxjs';
import { DataItem } from '../models/data-item.model';

@Component({
  selector: 'app-data-visualization',
  templateUrl: './data-visualization.component.html',
  styleUrls: ['./data-visualization.component.scss']
})
export class DataVisualizationComponent {

  chartData: any;
  chartOptions: any;
  file!: File;
  chartInfo: string = 'sample';
  isChecked: boolean = false;
  showChart: boolean = false;
  showError: boolean = false;
  message: string = 'Upload a file to start!';
  intervalSubscription: Subscription | undefined;
  constructor(private dashboardService: DashboardService) {
  }

  //#region public methods
  onFileUpload(event: any) {
    this.file = event.files[0];
    this.chartInfo = this.file.name.split('.')[0];
    this.generateChartDataFromUploadedFile(this.file);
  }

  onCheckboxChange() {
    if (this.isChecked && !this.intervalSubscription) {
      this.intervalSubscription = interval(5000).pipe(
        switchMap(async () => this.fetchUpdatedData())
      ).subscribe();
    }

    if (!this.isChecked && this.intervalSubscription) {
      this.intervalSubscription.unsubscribe();
      this.intervalSubscription = undefined;
    }
  }
  //#endregion

  //#region private methods
  private generateChartDataFromUploadedFile(file: File) {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    this.dashboardService.processFile(formData).subscribe((data: DataItem[]) => {
      this.handleSuccess(data);
    },
      (err) => {
        this.handleError(err);
      }
    );

  }

  private fetchUpdatedData(): void {
    this.dashboardService.getUpdatedData().subscribe((data: DataItem[]) => {
      this.handleSuccess(data);
    },
      (err) => {
        this.handleError(err);
      });
  }

  private setChartData(data: any[]) {
    let labels = data.map(item => item.name);
    let values = data.map(item => item.value);
    let bgColorCodes = data.map(item => item.colorCode);
    let bgColors = data.map(item => item.color);
    this.chartData = {
      labels: labels,
      datasets: [
        {
          label: this.chartInfo,
          data: values,
          backgroundColor: bgColors
        }
      ]
    };

    this.chartOptions = {
      plugins: {
        legend: {
          display: false,
        }
      },
    };
  }

  private handleSuccess(res: DataItem[]) {
    this.showChart = true;
    this.showError = false;
    this.setChartData(res);
  }

  private handleError(err: any) {
    this.showChart = false;
    this.isChecked = false;
    this.showError = true;
    this.chartData = {};
    this.message = err.error;
    console.log(err);
  }
  //#endregion
}
