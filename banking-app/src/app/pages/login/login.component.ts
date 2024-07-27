import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticationService} from "../../services/services/authentication.service";
import {AuthenticationRequest} from "../../services/models/authentication-request";
import {FormsModule} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    NgIf
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{

  urlParam = "Not yet defined";

  authRequest: AuthenticationRequest = {};
  errorMessages: Array<string> = [];

  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private  activatedRoute: ActivatedRoute
  ) {
    this.urlParam = this.activatedRoute.snapshot.params["someText"];
  }

  ngOnInit() {
  }

  login(){
    this.errorMessages = []
    this.authService.authenticate({
      body: this.authRequest
    }).subscribe({
      next: (data) => {
        localStorage.setItem('token', data.token as string);
      },
      error: (err) => {
        console.log(err);
        this.errorMessages.push(err.error.errorMessage);
      }
    });
  }


    async register() {

    await this.router.navigate(["register"]);
  }
}
