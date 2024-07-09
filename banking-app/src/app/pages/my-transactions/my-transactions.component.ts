import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-my-transactions',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './my-transactions.component.html',
  styleUrl: './my-transactions.component.scss'
})
export class MyTransactionsComponent {

}
