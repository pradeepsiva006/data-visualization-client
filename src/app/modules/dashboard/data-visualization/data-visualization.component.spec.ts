import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DataVisualizationComponent } from './data-visualization.component';
import { DashboardService } from '../services/dashboard.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('DataVisualizationComponent', () => {
  let component: DataVisualizationComponent;
  let fixture: ComponentFixture<DataVisualizationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataVisualizationComponent],
      providers: [DashboardService],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [HttpClientTestingModule]
    });
    fixture = TestBed.createComponent(DataVisualizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
