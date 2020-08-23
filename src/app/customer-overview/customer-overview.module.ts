import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerOverviewComponent } from './customer-overview.component';
import { CustomerOverviewRoutingModule } from './customer-overview-routing.module';

@NgModule({
  declarations: [CustomerOverviewComponent],
  imports: [
    CommonModule,
    CustomerOverviewRoutingModule
  ]
})
export class CustomerOverviewModule { }
