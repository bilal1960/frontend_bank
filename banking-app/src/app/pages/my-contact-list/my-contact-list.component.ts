import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-my-contact-list',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './my-contact-list.component.html',
  styleUrl: './my-contact-list.component.scss'
})
export class MyContactListComponent {

}
