import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BillRoutingModule } from './bill-routing.module';

import { GenerateBillComponent } from './generate-bill/generate-bill.component';
import { PrintBillComponent } from './print-bill/print-bill.component';
import { BillHomeComponent } from './bill-home/bill-home.component';

@NgModule({
  imports: [
    CommonModule,
    BillRoutingModule
  ],
  declarations: [GenerateBillComponent, PrintBillComponent, BillHomeComponent]
})
export class BillModule { }
