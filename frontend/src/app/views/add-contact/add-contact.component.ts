import { Component } from '@angular/core';
import { Contact } from "../../models/contact.model";
import { ContactService } from "../../core/services/contact.service";
import { Router } from "@angular/router";

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

  constructor(private contactService: ContactService,
    private router: Router) { }

  addContact(): void {
    this.contactService.create(this.contact).subscribe(() => {
      this.router.navigate(['/'])
    })
  }
}
