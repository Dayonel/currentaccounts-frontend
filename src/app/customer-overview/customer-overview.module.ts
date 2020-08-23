import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerOverviewComponent } from './customer-overview.component';
import { CustomerOverviewRoutingModule } from './customer-overview-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CustomerOverviewComponent],
  imports: [
    CommonModule,
    CustomerOverviewRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class CustomerOverviewModule { }
