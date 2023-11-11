import { Component, Input } from '@angular/core';
import { Contact } from "../../models/contact.model";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() contact!: Contact
}
