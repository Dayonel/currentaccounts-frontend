import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CustomerAccountService } from '../services/customer-account-service';
import { CustomerDTO } from '../model/customer-dto';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-customer-overview',
  templateUrl: './customer-overview.component.html',
  styleUrls: ['./customer-overview.component.scss']
})
export class CustomerOverviewComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private customerAccountService: CustomerAccountService,
              private snackBar: MatSnackBar) { }

  public customerForm: FormGroup;
  public customer: CustomerDTO;
  public customerColumns: string[] = [
    'Id',
    'Name',
    'Surname'
  ];

  public transactionColumns: string[] = [
    'Id',
    'Amount'
  ];

  ngOnInit() {
    this.customerForm = this.formBuilder.group({
      id: '',
    });
  }

  formSubmit() {
    this.customerAccountService.getCustomerById(this.customerForm.value.id).subscribe(
      res => {
        if (res) {
          this.customer = res;
        }
      },
      error => {
        this.snackBar.open(error.message, 'Close', { duration: 5000 });
      });
  }
}
