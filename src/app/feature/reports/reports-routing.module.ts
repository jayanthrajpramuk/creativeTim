import { FinanceReportComponent } from './finance-report/finance-report.component';
import { ForecastReportComponent } from './forecast-report/forecast-report.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportsHomeComponent } from './reports-home/reports-home.component';

const routes: Routes = [
  {
    path: '',
   
    children: [
      {
        path: 'forecast', component: ForecastReportComponent
      },
      {
        path: 'daily', component: FinanceReportComponent
      },
      {
        path: 'monthly', component: FinanceReportComponent
      },
      {
        path: 'due', component: FinanceReportComponent
      }
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
