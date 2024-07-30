import {Component, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {ContactService} from "../../services/services";
import {HelperService} from "../../services/helper/helper.service";
import {ContactDto} from "../../services/models/contact-dto";
import {NgForOf} from "@angular/common";

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
    private helperService: HelperService
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

}
