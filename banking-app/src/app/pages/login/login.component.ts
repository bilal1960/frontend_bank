import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{

  urlParam = "Not yet defined";

  constructor(
    private router: Router,
    private  activatedRoute: ActivatedRoute
  ) {
    this.urlParam = this.activatedRoute.snapshot.params["someText"];
  }

  ngOnInit() {
  }


    async register() {

    await this.router.navigate(["register"]);
  }
}
