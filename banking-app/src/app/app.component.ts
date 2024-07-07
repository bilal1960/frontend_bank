import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {RegisterComponent} from "./pages/register/register.component";
import {MenuComponent} from "./components/menu/menu.component";
import {UserDashboardComponent} from "./pages/user-dashboard/user-dashboard.component";
import {MyTransactionsComponent} from "./pages/my-transactions/my-transactions.component";
import {MyContactListComponent} from "./pages/my-contact-list/my-contact-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent, RegisterComponent, MenuComponent, UserDashboardComponent, MyTransactionsComponent, MyContactListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'banking-app';
}
