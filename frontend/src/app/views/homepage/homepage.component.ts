import { Component, OnInit } from '@angular/core';
import { Contact } from "../../models/contact.model";
import { ContactService } from "../../core/services/contact.service";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent implements OnInit{

  contacts: Contact[] = []

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.contactService.list().subscribe(contacts => {
      this.contacts = contacts
    })
  }
}
