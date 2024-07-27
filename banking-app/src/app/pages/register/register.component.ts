import {Component, OnInit} from '@angular/core';
import { Router} from "@angular/router";
import {UserDto} from "../../services/models/user-dto";
import {FormsModule} from "@angular/forms";
import {AuthenticationService} from "../../services/services/authentication.service";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    NgIf
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit{

  userDto: UserDto = {firstname: "", lastname: "", email: "", password: ""}
  errorMessages: Array<String> = [];

  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) {

  }

  async login() {

    await this.router.navigate(["login"]);

  }

  ngOnInit(): void {
  }

  register() {
    this.errorMessages = [];
    console.log('UserDto before sending:', this.userDto);

    this.authService.register({
        body: this.userDto
      }
    ).subscribe({
      next: async (data) => {
        await this.router.navigate(["confirm-register"]);

      },
      error: (err) => {
        this.errorMessages = err.error.validationErrors;

      }
    });
  }
}
