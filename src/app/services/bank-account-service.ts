import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BankAccountVM } from '../model/bank-account-vm';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class BankAccountService {
    
    constructor(private http: HttpClient) { }

    private endPoints = {
        create: '/api/bankaccount/create'
    };

    private get baseUrl() {
        return environment.baseUrl;
    }

    public create(customerID: number, initialCredit: number): Observable<boolean> {
        const bankAccount: BankAccountVM = {
            customerID: Number(customerID),
            initialCredit: Number(initialCredit)
        };
        return this.http.post<boolean>(this.baseUrl + this.endPoints.create, bankAccount);
    }
}
