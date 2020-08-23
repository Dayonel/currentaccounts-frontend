import { Routes, RouterModule } from '@angular/router';
import { CustomerOverviewComponent } from './customer-overview.component';
import { NgModule } from '@angular/core';
import { AddBankAccountComponent } from './components/add-bank-account/add-bank-account.component';

const routes: Routes = [
    {
        path: '',
        component: CustomerOverviewComponent
    },
    {
        path: 'bankAccounts',
        component: AddBankAccountComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CustomerOverviewRoutingModule { }
