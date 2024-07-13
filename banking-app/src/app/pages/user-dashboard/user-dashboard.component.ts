import {Component, OnInit} from '@angular/core';
import {LightInfoComponent, LightInforInput} from "../../components/light-info/light-info.component";
import {NgForOf} from "@angular/common";
import {TransactionsService} from "../../services/services/transactions.service";
import {TransactionDto} from "../../services/models/transaction-dto";
import {AddressService} from "../../services/services/address.service";

@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  imports: [
    LightInfoComponent,
    NgForOf
  ],
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.scss'
})
export class UserDashboardComponent implements OnInit{

  accountInfoList: Array<LightInforInput> = [];

  constructor(
    private  transactionService: AddressService
  ) {
  }

  ngOnInit(): void{
    this.initializeAccountInfo()
    this.transactionService.findAll3()
      .subscribe({
        next: (data) => {
          console.log(data);
        }
      });
  }

  private initializeAccountInfo() {

    this.accountInfoList = [
      {
        title: "Account balance",
        amount: 21560,
        infoStyle: "bg-primary"
      },
      {
        title: "Highest transfer",
        amount: 2560,
        infoStyle: "bg-warning"
      },
      {
        title: "Highest dposit",
        amount: 9560,
        infoStyle: "bg-success"
      },
    ];

  }

}
