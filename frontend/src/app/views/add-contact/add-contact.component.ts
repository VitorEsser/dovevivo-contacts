import { Component } from '@angular/core';
import { Contact } from "../../models/contact.model";

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrl: './add-contact.component.css'
})
export class AddContactComponent {

  contact: Contact = {
    name: '',
    surname: '',
    phone: ''
  }

  addContact():void {
    alert('Submit')
  }
}
