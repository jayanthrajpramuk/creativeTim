import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';

import { SummaryReportComponent } from './summary-report/summary-report.component';
import { PaitentReportComponent } from './paitent-report/paitent-report.component';
import { FinanceReportComponent } from './finance-report/finance-report.component';
import { ForecastReportComponent } from './forecast-report/forecast-report.component';
import { ReportsHomeComponent } from './reports-home/reports-home.component';

@NgModule({
  imports: [
    CommonModule,
    ReportsRoutingModule
  ],
  declarations: [SummaryReportComponent, PaitentReportComponent, FinanceReportComponent, ForecastReportComponent, ReportsHomeComponent]
})
export class ReportsModule { }
