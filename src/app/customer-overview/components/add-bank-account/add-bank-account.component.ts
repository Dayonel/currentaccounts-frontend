import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { BankAccountService } from 'src/app/services/bank-account-service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-add-bank-account',
  templateUrl: './add-bank-account.component.html',
  styleUrls: ['./add-bank-account.component.scss']
})
export class AddBankAccountComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private bankAccountService: BankAccountService,
              private snackBar: MatSnackBar) { }

  public bankAccountForm: FormGroup;

  ngOnInit() {
    this.bankAccountForm = this.formBuilder.group({
      customerID: '',
      initialCredit: ''
    });
  }

  formSubmit() {
    this.bankAccountService.create(this.bankAccountForm.value.customerID, this.bankAccountForm.value.initialCredit).subscribe(
      res => {
        if (res) {
          this.snackBar.open('Current account created successfully!', 'Close', { duration: 5000 });
        }
      },
      error => {
        this.snackBar.open(error.message, 'Close', { duration: 5000 });
      });
  }

}
