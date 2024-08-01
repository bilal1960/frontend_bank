import {Component, OnInit} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {ContactService} from "../../services/services";
import {HelperService} from "../../services/helper/helper.service";
import {ContactDto} from "../../services/models/contact-dto";
import {NgForOf} from "@angular/common";
import {update} from "@angular-devkit/build-angular/src/tools/esbuild/angular/compilation/parallel-worker";

@Component({
  selector: 'app-my-contact-list',
  standalone: true,
  imports: [
    RouterLink,
    NgForOf
  ],
  templateUrl: './my-contact-list.component.html',
  styleUrl: './my-contact-list.component.scss'
})
export class MyContactListComponent implements OnInit{

  contacts: Array<ContactDto> = [];
  constructor(
    private contactService: ContactService,
    private helperService: HelperService,
    private router: Router
  ) {
  }
  ngOnInit(): void {
    this.contactService.findAllByUserId1({
      "user-id": this.helperService.userId
    }).subscribe({
      next: (data) => {
        this.contacts = data;
      }
    });
  }


  async update(id: number | undefined) {
    await this.router.navigate(["user/new-contact", id])
  }
}
