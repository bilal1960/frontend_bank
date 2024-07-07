import {Component, Input} from '@angular/core';
import {NgClass} from "@angular/common";

export interface  LightInforInput{

   title?: string;
   amount?: number;
   infoStyle?: "bg-primary" | "bg-success" | "bg-warning" | "bg-danger";

}

@Component({
  selector: 'app-light-info',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './light-info.component.html',
  styleUrl: './light-info.component.scss'
})
export class LightInfoComponent {

  @Input() infoInput: LightInforInput = {};

}
