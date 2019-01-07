import { BillHomeComponent } from './bill-home/bill-home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GenerateBillComponent } from './generate-bill/generate-bill.component';
import { PrintBillComponent } from './print-bill/print-bill.component';

const routes: Routes = [

  {
    path: '',
    children: [
      {
        path: 'generatebill', component: GenerateBillComponent
      },
      {
        path: 'printbill', component: PrintBillComponent
      }
    ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BillRoutingModule { }
