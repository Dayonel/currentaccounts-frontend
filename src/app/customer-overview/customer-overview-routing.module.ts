import { Routes, RouterModule } from '@angular/router';
import { CustomerOverviewComponent } from './customer-overview.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
        path: '',
        component: CustomerOverviewComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CustomerOverviewRoutingModule { }
