import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { CustomerDTO } from '../model/customer-dto';

@Injectable({
    providedIn: 'root'
})
export class CustomerAccountService {

    constructor(private http: HttpClient) { }

    private endPoints = {
        get: (customerId) => `/api/customer/${customerId}`
    };

    private get baseUrl() {
        return environment.baseUrl;
    }

    public getCustomerById(id: number): Observable<CustomerDTO> {
        return this.http.get<CustomerDTO>(this.baseUrl + this.endPoints.get(id));
    }
}
